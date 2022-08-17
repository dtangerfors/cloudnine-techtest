import React, {useState, useEffect} from "react";
import ListSalonItem from "./ListSalonItem";

const ListSalons = ({filterValue}) => {
   const [salons, setSalons] = useState([]);
   const [filteredSalons, setFilteredSalons] = useState([]);

   /* Fetch data from file and set it to states */ 
   const getData = () => {
      fetch('data.json', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(resp => {
         return resp.json()
      }).then(json => {
         setSalons(json.salons);
         setFilteredSalons(json.salons); 
      })
   }

   /* When the filter range is active, filter 
   the salons based on min and max value,
   then set it to filtered state */
   const filterSalons = () => {
      if (filterValue.isFiltered) {
        const salonsToFilter = [...salons];

        const results = salonsToFilter.filter(salon => {
         return salon.treatments.hair.price.amount >= filterValue.min && salon.treatments.hair.price.amount <= filterValue.max;
        })

        setFilteredSalons(results)
      }
   }

   useEffect(()=>{
      getData();
   },[]);

   useEffect(() => {
      filterSalons();
   },[filterValue]);


   return (
      <ul className="flex flex-col bg-white max-w-screen-lg mx-auto h-full pb-4">
         {filteredSalons.map(salon => {
         return <ListSalonItem salon={salon} key={salon.name} />
      })}
      </ul>
   )
}

export default ListSalons