import { MapPin } from "lucide-react";

const SearchInput = () => {
   return (
      <div>
         <h2 className="text-center text-[20px] text-gray mb-4 mt-5">
            Поиск машины...
         </h2>
         <div className=" flex items-center justify-center">
            <div className="flex bg-gray300 p-1 px-3 rounded-md gap-2">
               <div className=" flex items-center border-r-[1px] border-gray">
                  <MapPin height={18} width={18} />
                  <input
                     type="text"
                     placeholder="Локация"
                     className="p-2 outline-none  bg-transparent text-gray700 placeholder:text-gray700"
                  />
               </div>
               <div>
                  <input
                     type="date"
                     className="p-2 outline-none bg-transparent text-gray700"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchInput;
