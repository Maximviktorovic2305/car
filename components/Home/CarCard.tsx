import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = (props: any) => {
   const [car, setCar] = useState<any>();

   useEffect(() => {
      if (props.car) {
         setCar(props.car);
      }
   }, [props.car]);

   return (
      car && (
         <div className="bg-gray100 relative grid grid-cols-1 gap-4 w-full h-full mb-5 rounded-md hover:border-[1px] hover:scale-105 cursor-pointer duration-200 hover:border-blue300 hover:shadow-lg p-2">
            <div className=" flex items-center gap-2">
               <h2 className="text-[16px] font-medium mb-2">{car.carBrand}</h2>
               <h2 className="text-[20px] font-bold mb-2">{car.name}</h2>
            </div>
            <div>
               <span>$ </span>
               <span className="font-bold">{car.price}</span>

               <span>/в день</span>
            </div>
            <Image
               src={props.img}
               alt='#'
               width={300}
               height={200}
               className="object-cover p-2"
            />
            <div className="flex gap-4 justify-around">
               <div className="text-center text-gray">
                  <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
                  <h2 className="line-clamp-5 text-[14px] font-light">
                     {car.carType}
                  </h2>
               </div>
               <div className="text-center text-gray">
                  <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
                  <h2 className="line-clamp-5 text-[14px] font-light">
                     {car.carType}
                  </h2>
               </div>
               <div className="text-center text-gray">
                  <FaGasPump className="w-full text-[22px] mb-2" />
                  <h2 className="line-clamp-5 text-[14px] font-light">
                     {car.carAvg} л/ч
                  </h2>
               </div>
            </div>
            <button className="absolute z-10 right-5 top-5 py-1 px-2 bg-blue300 rounded-md hover:bg-blue400 duration-150">
               Аренда
            </button>
         </div>
      )
   );
};

export default CarCard;
