import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import ContactMessage from "@/app/components/contactComponents/ContactMessage";
import SubscriptionSection from "@/app/components/homeComponents/SubscriptionSection/SubscriptionSection";
export default async function BlogPostSite() {
  return (
    <div role="main" className="[&>*]:col-[content]">
      <NavBar page="contact" />
      <PageTitle text="Contact Us" />
      <ContactMessage></ContactMessage>
      <SubscriptionSection></SubscriptionSection>
      <Footer />
    </div>
  );
}
