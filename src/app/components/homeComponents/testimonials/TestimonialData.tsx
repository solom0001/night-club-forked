import Image from "next/image";
import { Suspense } from "react";
import SoMeIcons from "../../utilityComponents/SoMeIcons";
import CarouselOne from "../../utilityComponents/CarouselOne";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  asset: { url: string };
  facebook: string;
  twitter: string;
};

const TestimonialData = async ({}) => {
  const url = "http://localhost:4000/testimonials";
  const response = await fetch(url);
  const data = (await response.json()) as Testimonial[];

  const renderSlot = (testimonial?: Testimonial) => {
    if (!testimonial) return <div>No testimonial</div>;

    return (
      <div key={testimonial.id} className="flex flex-col w-full p-4">
        <div className="flex flex-col gap-4 items-center">
          <div className="aspect-square">
            <Image src={testimonial.asset.url} width={200} height={200} alt={`picture of ${testimonial.name}`} unoptimized className="object-cover object-center" />
          </div>
          <h2>{testimonial.name}</h2>
        </div>
        <span className="col-span-full text-center justify-center">
          <p>{testimonial.content}</p>
        </span>
        <div className="w-fit h-fit mx-auto col-start-2 mt-8">
          <SoMeIcons facebook={testimonial.facebook} twitter={testimonial.twitter} />
        </div>
      </div>
    );
  };

  console.log("testIM data:", data);

  return (
    <Suspense>
      <div
        className="items-center justify-center full-bleed grid grid-cols-subgrid 
      [&>*]:col-[content] p-12 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center relative before:z-10 before:absolute before:content-[''] before:inset-0 before:h-full before:w-full before:bg-black/70 bg-cover bg-center"
      >
        <CarouselOne slot1={renderSlot(data[0])} slot2={renderSlot(data[1])} slot3={renderSlot(data[2])}pushStyle="z-20" />
      </div>
    </Suspense>
  );
};

export default TestimonialData;
