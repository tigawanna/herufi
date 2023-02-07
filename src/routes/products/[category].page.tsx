import { Page,PageProps } from "rakkasjs";



const ProductsPage: Page = function ProductsPage({params}:PageProps) {
    // console.log("params ==== ",params)
    return (

        <main className="w-full h-full min-h-screen flex flex-col items-center ">
            <div className='w-full  flex items-center justify-center'>
                PRODUCTS PAGE
                {params.category}
            </div>
        </main>

    );
};

export default ProductsPage;
