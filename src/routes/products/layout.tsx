// This is the main layout of our app. It renders the header and the footer.

import { Head,Layout } from "rakkasjs";
import { lazy } from "react";

const BreadCrumbs = lazy(() => import('./../../components/navigation/breadcrumbs'))
const ProductsLayout: Layout = ({ children }) => {


  return (

  <>

    <Head title="products" />
      <section className=" w-full h-[90%]  mt-10">
        <div className='w-full  flex items-center justify-end  p-2 sticky top-12 bg-slate-200'>
          <BreadCrumbs/>
        </div>
        {children}
      </section>

    <footer className="">
    </footer>
  </>
);}

export default ProductsLayout;


