import React from 'react'
import Filter from '../components/Filter'
import Header from '../components/Header'
import ListSalons from '../components/ListSalons'

const List = () => {
return (
   <>
   <Header />
   <main className="pt-[50px]">
      <Filter />
      <ListSalons />
   </main>
   </>
)
}

export default List