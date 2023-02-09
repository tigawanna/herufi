import { Page, PageProps } from "rakkasjs";

const ProductPage: Page = function ProductPage({ params }: PageProps) {

    return (
    <main className="w-full h-full min-h-screen flex flex-col items-center ">
        <div className='w-full  flex items-center justify-center p-2 sticky top-12 bg-slate-200'>
            {params.rest}
        </div>
    </main>

    );
};

export default ProductPage;
