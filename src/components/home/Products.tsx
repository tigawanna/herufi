import { useQuery, useServerSideMutation, useServerSideQuery } from "rakkasjs";
import { getProducts } from "./api";

interface ProductsProps {

}

export const Products = ({}:ProductsProps) => {
    const { data, refetch } = useServerSideQuery(getProducts, {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    });


return (
 <div className='w-[95%] h-full flex items-center justify-center'>
<div className="w-full p-2
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4
">
{data?.products.map((item)=>{
    return(
        <button 
        key={item.id}
        className="h-full w-full aspect-square shadow-lg border rounded-lg
        hover:shadow-lg  hover:shadow-slate-300
        flex flex-col items-center justify-center">
            <img src={item.thumbnail} className="w-[200px] h-[200px]" height={'200px'} width={'200px'}/>
              <div className="">{item.brand}</div>
              <div className="flex gap-x-2">
              
                <div className="">{item.discountPercentage}% off</div>
                <div className="text-lg font-bold">{item.price}$</div>
              </div>

        </button>
    )
})}
</div>
 </div>
);
}
