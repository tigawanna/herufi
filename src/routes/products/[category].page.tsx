import { Page,PageProps } from "rakkasjs";
import { CategoryProducts } from "./CategoryProducts";

const ProductsPage: Page = function ProductsPage({params}:PageProps) {
    // console.log("params ==== ",params)
    return (

        <main className="w-full h-full min-h-screen flex flex-col items-center ">
            <div className='w-full  flex items-center justify-center text-xl p-2 font-bold sticky top-12 bg-slate-200'>
                {params.category}
            </div>
            <CategoryProducts categ={params.category}/>
        </main>

    );
};

export default ProductsPage;
