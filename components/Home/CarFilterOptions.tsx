import { useEffect, useState } from "react";

const CarFilterOptions = ({ carsList, setBrand, orderCarList }: any) => {
   const [brandItems, setBrandsItems] = useState<any>([]);
   const BrandSet = new Set();

   const filterBrands = () => {
      carsList.forEach((item: any) => {
         BrandSet.add(item.carBrand);
      });

      setBrandsItems(Array.from(BrandSet));
   };

   useEffect(() => {
      if (carsList) {
         filterBrands();
      }
   }, [carsList]);

   return (
      <div className="mt-10 flex items-center justify-between">
         <div>
            <h2 className="text-[30px] font-bold ">Каталог машин</h2>
            <h2 className="text-gray">Откройте наши машины для себя</h2>
         </div>
         <div className="flex gap-5">
            <select
               className="select select-bordered w-full max-w-xs"
               onChange={(e) => orderCarList(e.target.value)}>
               <option disabled selected>
                  Цена
               </option>
               <option value={-1}>Мин - Макс</option>
               <option>Макс - Мин</option>
            </select>

            <select
               className="select select-bordered md:block max-w-xs hidden"
               onChange={(e) => setBrand(e.target.value)}>
               <option disabled selected>
                  Производитель
               </option>
               {brandItems?.map((brand: string, i: number) => (
                  <option key={i}>{brand}</option>
               ))}
            </select>
         </div>
      </div>
   );
};

export default CarFilterOptions;
