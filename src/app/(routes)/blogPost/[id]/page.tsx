import NavBar from "@/app//components/utilityComponents/Navbar";
import PageTitle from "@/app//components/utilityComponents/PageTitle";
import Footer from "@/app//components/utilityComponents/footerComps/Footer";
import { Suspense } from "react";
import { FormState } from "@/app/action/action";
import BlogPostContent from "@/app/components/blogPost/BlogPostContent";
import { SearchParams } from "next/dist/server/request/search-params";
import Comments from "@/app/components/blogPost/Comments";

type BlogPost = {
  id: number;
  asset: {
    url: string;
  };
  title: string;
  content: string;
  author: string;
  params: SearchParams;
};

type BlogResponse = BlogPost[];

type Commentdata = {
  id: number;
  blogpostid: number;
  name: string;
  content: string;
  date: string;
};

type CommentResponse = BlogPost[];

export default async function BlogPostSite({ params }: BlogResponse) {
  const { id } = await params;
  console.log("id = ", id);

  const url = "http://localhost:4000/blogposts";
  const response = await fetch(url);
  const posts = (await response.json()) as BlogResponse;

  const postsWithComments = await Promise.all(
    posts.map(async (post) => {
      const commentUrl = `http://localhost:4000/blogposts/${post.id}?embed=comments`;
      const commentResponse = await fetch(commentUrl);
      const data = await commentResponse.json();
      const comments = data.comments as CommentResponse;
      return {
        ...post,
        commentCount: comments.length,
      };
    })
  );
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <div className="[&>*]:col-[content]">
        <NavBar page="blog" />
        <PageTitle text="blog post"></PageTitle>
        <BlogPostContent
          postsWithComments={postsWithComments}
        ></BlogPostContent>
        <Comments id={id}></Comments>
        <Footer />
      </div>
    </Suspense>
  );
}
