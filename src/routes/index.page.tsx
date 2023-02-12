import { Page } from "rakkasjs";
import { Products } from "../components/home/Products";
import { Homepage } from "../components/home/Homepage";


const HomePage: Page = function HomePage() {
  return (
  
    <main className="w-full h-full min-h-screen flex flex-col items-center ">
      <div className='w-full  flex items-center justify-center p-2'>
        <Homepage/>
        </div>
        <Products/>
    </main>

  );
};

export default HomePage;

