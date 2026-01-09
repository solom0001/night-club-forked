import ReserveSection from "@/app/components/bookComponents/ReserveSection";
import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import SubscriptionSection from "@/app/components/homeComponents/SubscriptionSection/SubscriptionSection";
export default function BookPage() {
  return (
    <div role="main" className="[&>*]:col-[content]">
      <NavBar page="book" />
      <PageTitle text="Book table" />

      <ReserveSection />
      <SubscriptionSection></SubscriptionSection>
      <Footer />
    </div>
  );
}
