import cart from './assets/cart.svg'
interface HomepageProps {

}

export const Homepage = ({}:HomepageProps) => {
return (
 <div className='w-full h-full flex items-center justify-center '>
    <div className="w-full h-full  flex items-center justify-center border p-5">
        <img className='min-h-[300px]' src={cart}/>
    </div>
 </div>
);
}
