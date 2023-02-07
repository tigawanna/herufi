
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
        <button key={item} className='rounded-xl border  p-2 text-lg
         shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-slate-300 '>
          {item}
        </button>
    )
   })}
 </div>
    </div>
);
}
