import { useQuery, useServerSideMutation, useServerSideQuery } from "rakkasjs";
import { getProducts } from "./api";

interface ProductsProps {

}

export const Products = ({}:ProductsProps) => {
    const { data, refetch } = useServerSideQuery(getProducts, {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    });

console.log("data in productts ",data)
return (
 <div className='w-[95%] h-full flex items-center justify-center'>
<div className="w-full p-2
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4
">
{data?.products.map((item)=>{
    return(
        <div className="h-full w-full aspect-square 
        flex flex-col items-center justify-center">
            <img src={item.thumbnail} className=" aspect-square md:w-[250px] "/>
              <div className="">{item.brand}</div>
            <div className="text-lg font-bold">{item.price}$</div>
        </div>
    )
})}
</div>
 </div>
);
}
