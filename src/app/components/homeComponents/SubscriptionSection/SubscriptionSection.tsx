import Subscription from "./Subscription";

const SubscriptionSection = () => {
  return (
    <div className="full-bleed h-[400px] w-full flex flex-col items-center gap-16 py-[80px] bg-black">
      <div className="flex flex-col">
        <h2 className="uppercase text-center">
          want the latest night club news
        </h2>
        <p>
          Subscribe to our newsletter and never miss an
          <span className="text-(--red)"> Event</span>
        </p>
      </div>
      <Subscription></Subscription>
    </div>
  );
};

export default SubscriptionSection;
