import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import chevron_down from "../images/icons/chevron.down.svg";

const Filter = ({ filterValue, setValue }) => {
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    min: filterValue.min,
    max: filterValue.max,
    isFiltered: false,
  });

  /*  Component to allow for filter based on a price range.
      Uses ReactInputRance to get att good UX for end user. 
      The min and max prices are set to its state when the 
      range is changed. When user is finished and has released
      the handle, the price range is sent to the state in the 
      List view, this to prevent to many re-renders on the list. */
  return (
    <div className="sticky z-10 top-[50px] h-14 p-4 bg-white border-b border-primary">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <div className="font-sans font-light text-[15px]">
          Price <span>${filterValue.min}</span> - <span>${filterValue.max}</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="w-14 h-14 -mr-4 -mt-4 grid place-items-center"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        >
          <img src={chevron_down} className="w-[14px]" />
        </button>
      </div>
      <div
        className={`absolute z-10 w-full top-14 left-0 p-8 bg-white after:bg-gradient-to-b from-black/10 to-black/0 after:w-full after:h-32 after:block after:absolute after:left-0 after:-bottom-32 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between max-w-screen-lg mx-auto">
        <InputRange
          formatLabel={(value) => `$${value}`}
          maxValue={100}
          minValue={1}
          value={filterData}
          onChange={(value) => setFilterData({ isFiltered: true, ...value })}
          onChangeComplete={() => setValue(filterData)}
        />
        </div>
      </div>
    </div>
  );
};

export default Filter;
