import React, { useState, useCallback } from "react";
import InputRange from 'react-input-range';

import "react-input-range/lib/css/index.css";

import chevron_down from "../images/icons/chevron.down.svg";

const Filter = ({filterValue, setValue}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky z-10 top-[50px] h-14 flex justify-between p-4 bg-white border-b border-primary">
      <div className="font-sans font-light text-[15px]">
        Price <span>${filterValue.min}</span> - <span>${filterValue.max}</span>
      </div>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="w-14 h-14 -mr-4 -mt-4 grid place-items-center"
        style={{transform: open ? 'rotate(180deg)' : 'rotate(0)'}}
      >
        <img src={chevron_down} className="w-[14px]" />
      </button>
      <div className={`absolute z-10 w-full top-14 left-0 px-4 py-8 bg-white after:bg-gradient-to-b from-black/10 to-black/0 after:w-full after:h-32 after:block after:absolute after:left-0 after:-bottom-32 ${open ? 'block': 'hidden'}`}>
         <InputRange 
          maxValue={100}
          minValue={1}
          value={filterValue} 
          onChange={value => setValue({isFiltered: true, ...value})}
          />
      </div>
    </div>
  );
};

export default Filter;
