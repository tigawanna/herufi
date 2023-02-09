import { Main, ProductType } from "../home/api";
import { Link, useLocation } from 'rakkasjs';

interface ProductListProps {
data: Main | undefined
}

export const ProductList = ({data}:ProductListProps) => {
const location = useLocation()

const pathName = (item: ProductType)=>{
if(location.current.pathname ==='/'){
return location.current.origin+"/products/"+ item.category+'/'
}    
return location.current.origin+location.current.pathname+'/'
}

return (
    <div className='w-[95%] h-full flex items-center justify-center'>
        <div className="w-full p-2
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
            {data?.products.map((item) => {
                return (
                    <Link href={pathName(item)+item.id}
                        key={item.id}
                        className="h-full w-full aspect-square shadow-lg border rounded-lg
                        hover:shadow-lg  hover:shadow-slate-300
                        flex flex-col items-center justify-center">
                        <img src={item.thumbnail} loading="lazy"
                            className="w-[400px] h-[400px] md:w-[200px] md:h-[200px]" height={'200px'} width={'200px'} />
                        <div className="">{item.brand}</div>
                        <div className="flex gap-x-2">

                            <div className="">{item.discountPercentage}% off</div>
                            <div className="text-lg font-bold">{item.price}$</div>
                        </div>

                    </Link>
                )
            })}
        </div>
    </div>
);
}
