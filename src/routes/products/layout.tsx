// This is the main layout of our app. It renders the header and the footer.

import { Head,Layout } from "rakkasjs";

const ProductLayout: Layout = ({ children }) => {


  return (

  <>

    <Head title="products" />



      <section className=" w-full h-[90%]  mt-10">
        {children}
      </section>

    <footer className="">
    </footer>
  </>
);}

export default ProductLayout;
