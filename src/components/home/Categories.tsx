
import { Link, navigate } from 'rakkasjs';
import { categories } from './api';

interface CategoriesProps {

}

export const Categories = ({}:CategoriesProps) => {

return (
 <div className='w-full h-full flex items-center justify-center'>
    <div className='w-full h-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2'>
   {categories.map((item)=>{
    return(
      <Link href={'products/' + item}
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
