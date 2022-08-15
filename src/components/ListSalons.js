import React, {useState, useEffect} from "react";
import ListSalonItem from "./ListSalonItem";

const ListSalons = () => {
   const [salons, setSalons] = useState([]);

   const getData = () => {
      fetch('data.json', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(resp => {
         return resp.json()
      }).then(json => {
         return setSalons(json.salons)
      })
   }

   useEffect(()=>{
      getData()
   },[]);


   return (
      <ul className="flex flex-col">
         {salons.map(salon => {
         return <ListSalonItem salon={salon} key={salon.name} />
      })}
      </ul>
   )
}

export default ListSalons