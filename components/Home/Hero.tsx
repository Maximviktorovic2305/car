import Image from "next/image";

function Hero() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2">
         <div>
            <h2 className="text-[40px] md:text-[50px] font-bold my-2">
               Премиальный сервис для аренды машин
            </h2>
            <h3 className="text-gray text-[20px] mb-2">
               Открывайте больше машин с нами
            </h3>
            <button className="p-2 mt-5 bg-blue px-4 rounded-md hover:scale-105 transition-all shadow-md">
               Аренда
            </button>
         </div>
         <div className="mt-5">
            <Image src="/hero.png" alt="hero" height={300} width={612} />
         </div>
      </div>
   );
}

export default Hero;
