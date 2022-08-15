import React from "react";

import star_filled from "../images/icons/star-filled.svg";
import star_outlined from "../images/icons/star-outlined.svg";

const Rating = ({ rating }) => {
  return (
   <div className="flex items-center">
    <div className="flex star-rating mr-1">
      {/* Renderar ut fem stjarnor och kollar om score ar 
      mindre an totalScore, om sa, valj den ifyllda ikonen. */}
        {[...Array(5)].map((star, index) => {
          let starImg = star_outlined, score = index + 1;
          if (score <= rating.totalScore) starImg = star_filled;
          return (
            <span className="star">
              {" "}
              <img src={starImg} />
            </span>
          );
        })}
    </div>
    <span className="text-[11px] leading-3 text-gray-700">{` (${rating.ratedBy})`}</span>
    </div>
  );
};

export default Rating;
