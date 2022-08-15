import React from "react";

import filter_icon from "../images/icons/filter.svg";
import chevron_right from "../images/icons/chevron.right.svg";

const Header = () => {
return (
   <header className="fixed h-[50px] w-full grid grid-cols-3 items-center bg-white/90 backdrop-blur-sm border-b border-primary">
      <div>
         <button className="h-[50px] w-[50px] grid place-items-center"><span className="sr-only">Tillbaka</span> <img src={chevron_right} className="w-[10px]"/></button>
      </div>
      <div>
         <p className="font-serif text-center text-2xl text-black">Hår</p>
      </div>
      <div className="justify-self-end">
         <button className="ml-auto h-[50px] w-[50px] grid place-items-center"><span className="sr-only">Filter</span> <img src={filter_icon} className="w-5"/></button>
      </div>
   </header>
)
}

export default Header