import React from "react";
import PageTitle from "./PageTitle";
import { FaMosque } from "react-icons/fa6";
import { GiClothesline } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { FaToilet } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { BiSolidCabinet } from "react-icons/bi";

const facilities = [
  {
    id: 1,
    name: "Musholla",
    symbol: <FaMosque className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 2,
    name: "Area Jemuran",
    symbol: <GiClothesline className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 3,
    name: "Area Parkir",
    symbol: <AiFillCar className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 4,
    name: "WC Umum",
    symbol: <FaToilet className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 5,
    name: "Wifi",
    symbol: <BiWifi className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 6,
    name: "KM Dalam",
    symbol: <FaBath className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 7,
    name: "AC",
    symbol: <TbAirConditioning className="h-8 w-8 md:h-20 md:w-20" />,
  },
  {
    id: 8,
    name: "Lemari",
    symbol: <BiSolidCabinet className="h-8 w-8 md:h-20 md:w-20" />,
  },
];

const Facility = () => {
  return (
    <div className="flex gap-10 flex-col">
      <PageTitle title="Fasilitas" className="text-4xl text-center" />
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-24">
        {facilities.map((item) => (
          <div className="flex gap-4 flex-col" key={item.id}>
            <div className="border rounded-lg p-4 md:p-8 flex items-center justify-center">
              {item.symbol}
            </div>
            <div className="flex items-center justify-center">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
