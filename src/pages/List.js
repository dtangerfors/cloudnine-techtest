import React, { useState } from "react";

import Header from "../components/Header";
import Filter from "../components/Filter";
import ListSalons from "../components/ListSalons";

const List = () => {
  const [value, setValue] = useState({ min: 25, max: 50, isFiltered: false });
  return (
    <>
      <Header />
      <main className="pt-[50px]">
        <Filter filterValue={value} setValue={setValue} />
        <ListSalons filterValue={value} />
      </main>
    </>
  );
};

export default List;
