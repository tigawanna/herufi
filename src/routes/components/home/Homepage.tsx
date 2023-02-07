import { Categories } from './Categories';
import cart from './assets/cart.svg'
interface HomepageProps {

}

export const Homepage = ({}:HomepageProps) => {
return (
 <div className='w-full h-full flex flex-col md:flex-row items-center justify-center '>
    <div className="md:w-[30%] h-full  flex items-center justify-center border p-5">
        <img className='min-h-[300px]' src={cart}/>
    </div>
    <div className='md:w-[60%] '>
        <Categories/>
    </div>
 </div>
);
}
