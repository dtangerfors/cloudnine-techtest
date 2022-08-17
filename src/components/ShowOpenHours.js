import React from "react";

import chevron_down from "../images/icons/chevron.down.svg";

const ShowOpenHours = ({openingHours}) => {

   const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const d = new Date();
   const day = d.getDay();
   let tomorrow = day < 6 ? day + 1 : 0;

   // Set start och end time for the current day
   let startTime = openingHours[day].opens;
   let endTime = openingHours[day].closes;

   let currentDate = new Date();   

   // Set startDate
   let startDate = new Date(currentDate.getTime());
   startDate.setHours(startTime.split(":")[0]);
   startDate.setMinutes(startTime.split(":")[1]);

   // Set endDate
   let endDate = new Date(currentDate.getTime());
   endDate.setHours(endTime.split(":")[0]);
   endDate.setMinutes(endTime.split(":")[1]);
   
   // Compare if current time is between open hours
   let isOpen = startDate < currentDate && endDate > currentDate;

   let textString = isOpen ? `Open until ${endTime} today` : `Opens ${openingHours[tomorrow].opens} tomorrow`;

   return <div className="flex">
      <p>{textString}</p> <img src={chevron_down} className="w-[14px] ml-4" />
   </div>

}

export default ShowOpenHours