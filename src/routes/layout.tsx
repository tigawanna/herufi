// This is the main layout of our app. It renders the header and the footer.

import { ClientSuspense, Head,Layout, ResponseHeaders, UseLocationResult, useLocation } from "rakkasjs";

import '../styles/tailwind.css'
import '@animxyz/core'
import { ReactProgress } from "../components/loaders/ReactProgress";
import { lazy } from "react";
const Toolbar = lazy(() => import("../components/navigation/Toolbar"));
import { headerConfig } from './../headers';


const MainLayout: Layout = ({ children }) => {
  const location = useLocation()
  
  const isanumating = (location: UseLocationResult)=>{
   if(location.pending){
      return true
    }
    return false
  }
  return (

  <>

    <Head title="Herufi" />

    <header className="flex justify-between w-full p-1">
      <div
        className="h-14 w-full  bg-[#334e56] dark:bg-slate-700
         bg-opacity-70 dark:bg-opacity-90 max-h-[50px] p-1 px-2
         fixed top-0 z-40 text-white"
      >
        <ClientSuspense fallback="">
          <Toolbar/>
          <ReactProgress isAnimating={isanumating(location)} />
          </ClientSuspense>
      </div>
    </header>

      <section className=" w-full h-[90%]  mt-10">
        {children}
      </section>

    <footer className="">
    </footer>
  </>
);}

export default MainLayout;

export function headers(){
  return headerConfig
}

