import React from "react";
import chevron_left from "../images/icons/chevron.left.svg"
import Rating from "./Rating";

const ListSalonItem = ({salon}) => {
   return (
      <li key={salon.name} className="w-full block pl-4 pr-[30px] text-left">
         <a href="" className="flex border-b border-gray-200 py-4">
            <div className="pr-4">
               <p className="text-black text-[15px] leading-6 font-sans align-bottom">{salon.treatments.hair.nextAvailableTime}</p>
            </div>
            <div className="flex-1 pr-4">
               <h2 className="font-serif text-black text-xl leading-6">{salon.name}</h2>
               <div>
                  <Rating rating={salon.rating} />
               </div>
               <p className="font-sans text-[15px] leading-5 font-light text-gray-700">{salon.info.address.street}</p>
            </div>
            <div className="text-right pr-4">
               <div>
                  <p className="text-black text-[15px] leading-6 font-sans align">{salon.treatments.hair.price.currency}{salon.treatments.hair.price.amount}</p>
               </div>
               <div>
                  <p className="text-[13px] leading-4 text-gray-700">{salon.treatments.hair.sessionTime} min</p>
               </div>
            </div>
            <div className="relative -mr-2 self-center">
               <img src={chevron_left} className="w-2"/>
            </div>
         </a>
      </li>
   )
}

export default ListSalonItem