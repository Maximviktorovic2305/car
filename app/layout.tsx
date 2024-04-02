import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata = {
   title: "Rent Car",
   description: "Rent car with our app",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body>
               <SignedIn>
                  <Navbar />
                  {children}
               </SignedIn>
               <SignedOut>
                  <SignIn />
               </SignedOut>
            </body>
         </html>
      </ClerkProvider>
   );
}
