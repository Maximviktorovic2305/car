import { getStoreLocations } from "@/services";
import { useEffect, useState } from "react";

const Form = ({ car }: any) => {
   const [storeLocation, setStoreLocation] = useState<any>([]);
   const [formValue, setFormValue] = useState({
      location: "",
      pickupDate: "",
      dropOffDate: "",
      pickupTime: "",
      dropOffTime: "",   
      cartId: ""
   });

   useEffect(() => {
      getStoreLocation_();
   }, []);  

   // useEffect(() => {
      
   //    if (car) {
   //       setFormValue({
   //          ...formValue,   
   //          cartId: {connect: {
   //             id: car.id
   //          }
   //       });
   //    }

   // }, [car])

   const getStoreLocation_ = async () => {
      const response: any = await getStoreLocations();
      setStoreLocation(response?.storesLocations);
   };

   const handleChange = (event: any) => {
      setFormValue({
         ...formValue,
         [event.target.name]: event.target.value,
      });
   };

   const handleSubmit = () => {
      console.log(formValue);
   };

   return (
      <div>
         <div className="flex flex-col w-full my-5">
            <label className="text-gray mb-2">Выбор локации</label>
            <select
               name="location"
               onChange={handleChange}
               className="select select-bordered w-full max-w-xs">
               <option disabled selected>
               Выбор локации
               </option>
               {storeLocation?.map((location: any, i: number) => (
                  <option key={i}>{location.address}</option>
               ))}
            </select>
         </div>
         <div className="flex flex-row gap-5 mb-5">
            <div className="flex flex-col w-full">
               <label className="text-gray mb-2">Дата аренды</label>
               <input
                  onChange={handleChange}
                  name="pickupDate"
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
               />
            </div>
            <div className="flex flex-col w-full">
               <label className="text-gray mb-2">Конец аренды</label>
               <input
                  onChange={handleChange}
                  name="dropOffDate"
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
               />
            </div>
         </div>
         <div className="flex flex-row gap-5 w-full mb-5">
            <div className="flex flex-col w-full">
               <label className="text-gray mb-2">Время начала</label>
               <input
                  onChange={handleChange}
                  name="pickupTime"
                  type="time"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
               />
            </div>
            <div className="flex flex-col w-full">
               <label className="text-gray mb-2">Время сдачи</label>
               <input
                  onChange={handleChange}
                  name="dropOffTime"
                  type="time"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
               />
            </div>
         </div>
         <div className="modal-action">
            <button className="btn">Close</button>
            <button onClick={handleSubmit} className="btn bg-blue300">
               Сохранить
            </button>
         </div>
      </div>
   );
};

export default Form;
