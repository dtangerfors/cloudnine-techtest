import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Rating from "../components/Rating";
import ShowOpenHours from "../components/ShowOpenHours";

import bg_image from "../images/background_photo.jpg";
import clock from "../images/icons/hours.svg";
import address from "../images/icons/address.svg";
import website from "../images/icons/website.svg";
import phone from "../images/icons/phone.svg";
import heart from "../images/icons/heart.svg";
import chevron_left_big from "../images/icons/chevron.left.big.svg";

const SingleSalon = () => {

   const navigate = useNavigate();
   const [salon, setSalon] = useState([]);
   const [isLoaded, setLoaded] = useState(false);
   let { salonId } = useParams();

   const getData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      const salon = data.salons.filter(e => e.salonId === salonId)[0];
      setSalon(salon);
      setLoaded(true);
  }

   useEffect(()=>{
      getData();
   },[]);

  return (
   !isLoaded ? <p>Laddar …</p> : <div className="bg-gray-100">
   <header className="relative z-10 h-[250px] p-4 flex flex-col justify-between">
      <div className="flex justify-between">
         <div>
         <button onClick={() => navigate(-1)}><span className="sr-only">Go back</span> <img src={chevron_left_big}/></button></div>
         <div><img src={heart}/></div>
      </div>
      <div>
         <h1 className="font-serif text-white text-2xl mb-2">{salon.name}</h1>
         <Rating rating={salon.rating} color="text-white" font_size="13px" img_size="14"/>
      </div>
      <figure className="absolute -z-10 w-full h-full inset-0">
         <img src={bg_image} className="w-full h-full object-cover" />
      </figure>
   </header>
   <div className="bg-white flex">
      <div className="h-14 flex-1 grid place-items-center border-b-2 border-primary">
         <span className="text-[15px] font-sans text-black">Info</span>
      </div>
      <div className="h-14 flex-1 grid place-items-center">
         <span className="text-[15px] font-sans text-black">Schedule</span>
      </div>
   </div>
   <div className="bg-white mt-5 px-4 pb-6">
      <div>
         <ul>
            <li className="flex items-center text-[15px] font-sans font-light text-black py-4 border-b border-gray-100"><img src={address} className="w-4 inline-block mr-3"/><p>{salon.info.address.street}, {salon.info.address.postalNumber} {salon.info.address.postalCity}</p> </li>
            <li className="flex items-center text-[15px] font-sans font-light text-black py-4 border-b border-gray-100"><img src={clock} className="w-4 inline-block mr-3"/><ShowOpenHours openingHours={salon.openingHours} /></li>
            <li className="flex items-center text-[15px] font-sans font-light text-black py-4 border-b border-gray-100"><img src={phone} className="w-4 inline-block mr-3"/><a href={`tel:${salon.info.phoneNumber}`}>{salon.info.phoneNumber}</a> </li>
            <li className="flex items-center text-[15px] font-sans font-light text-black py-4 border-b border-gray-100"><img src={website} className="w-4 inline-block mr-3"/><a href={salon.info.websiteURL} target="_blank">{salon.info.websiteURL}</a> </li>
         </ul>
      </div>
      <div className="pt-6">
         {salon.description.map((element, index) => (<p key={`desc-${index}`} className="text-base pb-2 font-light">{element}</p>))}
      </div>
   </div>

</div>
  );

}

export default SingleSalon