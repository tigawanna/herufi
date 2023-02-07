import { Page } from "rakkasjs";
import { Homepage } from "./components/home/Homepage";
import { Products } from "./components/home/Products";

const HomePage: Page = function HomePage() {
  return (
  
    <main className="w-full h-full min-h-screen flex flex-col items-center ">
      <div className='w-full  flex items-center justify-center'>
        <Homepage/>
        </div>
        <Products/>
    </main>

  );
};

export default HomePage;
