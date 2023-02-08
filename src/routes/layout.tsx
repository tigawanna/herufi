// This is the main layout of our app. It renders the header and the footer.

import { Head,Layout, UseLocationResult, useLocation } from "rakkasjs";

import '../styles/tailwind.css'

import { ReactProgress } from "../components/loaders/ReactProgress";
import { lazy } from "react";
import Toolbar from "../components/navigation/Toolbar";

// const Toolbar = lazy(() => import("../components/navigation/Toolbar"));


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
          <Toolbar/>
          <ReactProgress isAnimating={isanumating(location)} />
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
