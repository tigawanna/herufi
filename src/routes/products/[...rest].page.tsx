import { Page, PageProps, useServerSideQuery } from "rakkasjs";
import { getOneProduct, } from "../../components/home/api";

const ProductPage: Page = function ProductPage({ params }: PageProps) {
    const path_arr = params.rest.split('/')
    const prod_id = parseInt(path_arr[path_arr.length - 1])

    // console.log("product ====> ",prod_id)
    const { data, refetch } = useServerSideQuery(
        () => {
            if (typeof prod_id !== "number") {
                throw new Error("Invalid request , param prod_id must be of type number");
            }
            return getOneProduct(prod_id)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
        });

    // console.log("product data ===> ",data)
    return (
        <main className="w-full h-full min-h-screen flex flex-col items-center ">
            <div className="w-full flex items-start justify-center">

                <img
                    src={data?.thumbnail} alt="" loading="lazy"
                    className="w-[500px] aspect-square"
                    height={'400px'} width={'400px'} />

                <div className="w-full h-full p-5 flex flex-col items-start justify-center ">

                    <div className="text-lg font-bold">{data?.title}</div>
                    <div className="">{data?.brand}</div>
                    <div className="">{data?.description}</div>
                    <div className="">rating: {data?.rating}/5</div>

                    <div className="text-xl text-red-100 line-through">
                        {Math.floor((data?.price ?? 1) / (1 - ((data?.discountPercentage ?? 0) / 100)))}$
                    </div>
                    <div className="font-bold text-2xl ">{data?.price}$</div>
                    <div className="">{data?.stock} remaining</div>
                    <button className="w-full p-2 m-2 font-bold bg-[#f68b1e] rounded-lg ">Add to Cart</button>


                </div>

            </div>

        </main>

    );
};

export default ProductPage;

