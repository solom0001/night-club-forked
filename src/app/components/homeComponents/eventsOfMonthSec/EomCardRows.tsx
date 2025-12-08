"use client";
import EomCard from "./EomCards";

type Card = {
  title: string;
  desc: string;
  date: string;
  time: string;
  location: string;
 assetUrl: string;
};

type CardProps = {
  card1: Card;
  card2: Card;
};

const CardRow=({card1,card2}:CardProps)=>{
  
    return(
        <div className="grid grid-cols-2 gap-4 w-full h-full">
            <EomCard 
            title={card1.title}
            desc={card1.desc}
            date={card1.date}
            time={card1.time}
            location={card1.location}
            url={card1.assetUrl}
          
            />
            <EomCard 
            title={card2.title}
            desc={card2.desc}
            date={card2.date}
            time={card2.time}
            location={card2.location}
            url={card2.assetUrl}
            />
        </div>
    )
}

export default CardRow;