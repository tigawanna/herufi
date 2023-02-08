import { Link } from "rakkasjs";
import { TheIcon } from "../shared/wrappers/TheIcon";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Categories } from "../home/Categories";
import { ReactModalWrapper } from "../shared/wrappers/ReactModalWrapper";
import { useState } from "react";


interface ToolbarProps {

}


 const Toolbar = ({}:ToolbarProps) => {
const [isOpen, setIsOpen] = useState(false);
  

return (
 <div className='w-full h-full flex items-center justify-between p-1'>
    
    <TheIcon Icon={isOpen?FaTimes:FaBars} size="30px" iconstyle="m-2 md:hidden" 
    iconAction={()=>setIsOpen(prev=>!prev)}/>

        <Link className="w-full text-3xl font-bold hover:text-purple-400 hover:no-underline" href="/">
            Herufi
        </Link>

        <nav className="w-full p-1">
            <ul className="w-full flex items-center justify-end gap-1">
                {/* <li>
                    <StyledLink href="/" activeClass="bg-red-900">
                        Home
                    </StyledLink>
                </li> */}
    
            </ul>
        </nav>
        <ReactModalWrapper
            child={
            <nav className="w-full  flex item-center gap-1 ">
            <Categories/>
            </nav>
        }
            closeModal={() => setIsOpen(false)}
            delay={0}
            open={isOpen}
            responsive={false}
            closebutton={false}
            styles={{
                overlay_top: '8%',
                overlay_right: '0%',
                overlay_left: '0%',
                overlay_bottom: '0%',
                content_bottom: '10%',
                content_right: '10%',
                content_left: '0%',
                content_top: '2%',
            }} />

 </div>
);
}

export default Toolbar
