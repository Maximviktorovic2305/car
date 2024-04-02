import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const classH2 =
   "hover:bg-blue px-3 py-1 cursor-pointer rounded-lg hover:text-white";

function Navbar() {
   return (
      <>
         {/* <div className="absolute left-[30%] top-[20px] text-[16px] text-green500">
            Сайт создан с помощью: Next 14, Clerc, Graphql, Hygraph, Daisyui
         </div> */}

         <div className="dropdown dropdown-bottom absolute left-[43%] top-[8px] text-[16px] text-green500">
            <div tabIndex={0} role="button" className="btn m-1">
               Сайт создан
            </div>
            <ul
               tabIndex={0}
               className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-blue">
               <li>
                  <a href="https://nextjs.org/">Next 14</a>
               </li>
               <li>
                  <a href="https://clerk.com/docs/index">Clerc</a>
               </li>
               <li>
                  <a href="https://graphql.org/">Graphql</a>
               </li>
               <li>
                  <a href="https://hygraph.com/">Hygraph</a>
               </li>
               <li>
                  <a href="https://daisyui.com/">Daisyui</a>
               </li>
            </ul>
         </div>
         <div className="flex items-center justify-between p-5 shadow-lg border-gray border-b-[1px] border-gray-700 px-5">
            <Image alt="logo" src="/logo.png" width={100} height={100} />
            <div className="flex gap-5">
               <h2 className="hover:animate-scaleIn">
                  <Link href="/">Главная</Link>
               </h2>
               <h2 className="hover:animate-scaleIn cursor-pointer">История</h2>
               <h2 className="hover:animate-scaleIn cursor-pointer">
                  Связаться с нами
               </h2>
               <UserButton />
            </div>
         </div>
      </>
   );
}

export default Navbar;
