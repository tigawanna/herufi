import { Page, PageProps } from "rakkasjs";

import { Categories } from "../../components/home/Categories";

const ProductsPage: Page = function ProductsPage({ params }: PageProps) {
  // console.log("params ==== ",params)
  return (

    <main className="w-full h-full min-h-screen flex flex-col items-center ">
      <Categories />
    </main>

  );
};

export default ProductsPage;
