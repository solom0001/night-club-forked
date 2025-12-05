import {Suspense} from "react";

import CarouselOne from "../../utilityComponents/CarouselOne";
import CardRow from "./EomCardRows";

type Event ={
    id:number;
    title:string;
    description:string;
    date:string;
    asset:{url:string};
    location:string;
}
type EventResponse=Event[];


const EomData = async () => {
    return(        
    <Suspense>
        <FetchEvents/>
        </Suspense>
    );

}

const FetchEvents =async()=>{
    "use server";
    const url ="http://localhost:4000/events";
    const response = await fetch(url);
    const events=(await response.json()) as EventResponse;
    console.log(events);

    const eventRows: { card1: Event; card2: Event }[] = [];//card array templates af type Event

    for (let i = 0; i < events.length; i += 2) { //hver gruppe af 2
    eventRows.push({
      card1: events[i],
      card2: events[i + 1],        //push til cardarray 1 og 2
    });
  }

    return(
          {eventRows.map((row) => (
        <CarouselOne
          
          slot1={<CardRow card1={row.card1} card2={row.card2} />}
          slot2={null}
          slot3={null}
        />
      ))}
    );

    
}

export default EomData;