import img1 from "@/public/catalog/1.png";
import img2 from "@/public/catalog/2.png";
import img3 from "@/public/catalog/3.png";
import img4 from "@/public/catalog/4.png";
import img5 from "@/public/catalog/5.png";
import img6 from "@/public/catalog/6.png";
import img7 from "@/public/catalog/7.png";
import img8 from "@/public/catalog/8.png";
import { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const CarsList = ({ carsList }) => {
   const [selectedCar, setSelectedCar] = useState<any>([])   

   return (
      <div className="grid mt-4 sm:grid-cols-2 gap-5 lg:grid-cols-4">
         {carsList.map((car: any, i: number) => {
            let randomIndex = Math.floor(Math.random() * images.length);
            return (
               <div key={i} onClick={() => {(document as any).getElementById("my_modal_4").showModal(); setSelectedCar(car)}}>
                  <CarCard car={car} img={images[randomIndex]} />
               </div>
            );
         })}
         {/* <button
            className="btn"
            >
            open modal
         </button> */}
         <dialog id="my_modal_4" className="modal">
            <BookingModal car={selectedCar} />   
         </dialog>
      </div>
   );
};

export default CarsList;
