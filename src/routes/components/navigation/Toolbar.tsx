import { Link } from "rakkasjs";

interface ToolbarProps {

}

export const Toolbar = ({}:ToolbarProps) => {
return (
 <div className='w-full h-full flex items-center justify-between p-1'>
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
 </div>
);
}
