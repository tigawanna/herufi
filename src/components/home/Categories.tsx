
import { Link, navigate } from 'rakkasjs';
import { categories } from './api';
import { useLocation } from 'rakkasjs';
import { XyzTransitionGroup } from '@animxyz/react'
interface CategoriesProps {

}

export const Categories = ({}:CategoriesProps) => {
const location = useLocation()
// console.log("location  ===> ",location)
return (
 <div className='w-full h-full flex flex-col items-center justify-center bg-slate-200 md:bg-transparent bg-opacity-70'>
<div className='w-full text-center text-2xl font-bold sticky top-0 border-b '>Categories</div>
    <div className='w-full h-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2'>


   {categories.map((item)=>{
    return(
      // the navbar can be opened in any sub route and navigating to another
      // category can result in /producs/category/products/category which won't exist 
      // so all navigation are made from the base route(location.current.origin)
      <Link href={location.current.origin +'/products/'+ item}
        // onClick={()=>navigate('products/'+item)}
        key={item} className='w-full md:w-fit md:rounded-xl border-x md:border  p-2 text-lg
         shadow-lg hover:shadow-lg  hover:shadow-slate-300 '>
          {item}
        </Link>
    )
   })}

 </div>
    </div>
);
}
