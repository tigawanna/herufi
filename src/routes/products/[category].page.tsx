import { Page,PageProps } from "rakkasjs";
import { CategoryProducts } from "./CategoryProducts";

const ProductsPage: Page = function ProductsPage({params}:PageProps) {
    // console.log("params ==== ",params)
    return (

        <main className="w-full h-full min-h-screen flex flex-col items-center ">
                <CategoryProducts categ={params.category}/>
        </main>

    );
};

export default ProductsPage;
