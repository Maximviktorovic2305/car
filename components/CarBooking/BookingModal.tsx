import img1 from "@/public/catalog/1.png";
import img2 from "@/public/catalog/2.png";
import img3 from "@/public/catalog/3.png";
import img4 from "@/public/catalog/4.png";
import img5 from "@/public/catalog/5.png";
import img6 from "@/public/catalog/6.png";
import img7 from "@/public/catalog/7.png";
import img8 from "@/public/catalog/8.png";
import CarCard from "../Home/CarCard";
import Form from "./Form";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
let randomIndex = Math.floor(Math.random() * images.length);

const BookingModal = ({ car }: any) => {
   return (
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
         <div className="border-b-[1px] border-gray300 shadow-lg mb-2">
            <h3 className="text-[30px] font-light text-gray">Аренда</h3>
         </div>
         <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
               <CarCard car={car} img={images[randomIndex]} />
            </div>
            <div>
               <Form car={car}/>
            </div>
         </div>
         
      </form>
   );
};

export default BookingModal;
