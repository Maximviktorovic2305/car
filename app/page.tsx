"use client";

import CarFilterOptions from "@/components/Home/CarFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
   const [carsList, setCarsList] = useState<any>([]);
   const [carsOrgList, setCarsOrgList] = useState<any>([]);

   const getCarsList_ = async () => {
      const result: any = await getCarsList();

      setCarsList(result?.carLists);
      setCarsOrgList(result?.carLists);   
      
   };

   useEffect(() => {
      getCarsList_();
   }, []);

   const filterBrands = (brand: string) => {
      const filteredBrands = carsOrgList.filter(
         (item: any) => item.carBrand == brand
      );

      setCarsList(filteredBrands);
   };

   const orderCarList = (order: any) => {
      const sortedData = [...carsOrgList].sort((a, b) =>
         order == -1 ? a.price - b.price : b.price - a.price
      );

      setCarsList(sortedData);
   };

   return (
      <div className="p-5 sm:px-10 md:px-20">
         <Hero />
         <SearchInput />
         <CarFilterOptions
            carsList={carsOrgList}
            setBrand={(value: string) => filterBrands(value)}
            orderCarList={(value: string) => orderCarList(value)}
         />
         <CarsList carsList={carsList} />
      </div>
   );
}
