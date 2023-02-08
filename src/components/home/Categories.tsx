
import { Link, navigate } from 'rakkasjs';
import { categories } from './api';

interface CategoriesProps {

}

export const Categories = ({}:CategoriesProps) => {

return (
 <div className='w-full h-full flex items-center justify-center'>
        <div className='w-full h-full 
        flex flex-wrap items-center justify-center gap-2'>
   {categories.map((item)=>{
    return(
      <Link href={'products/' + item}
        // onClick={()=>navigate('products/'+item)}
        key={item} className='rounded-xl border  p-2 text-lg
         shadow-lg hover:shadow-lg hover:scale-95 hover:shadow-slate-300 '>
          {item}
        </Link>
    )
   })}
 </div>
    </div>
);
}
