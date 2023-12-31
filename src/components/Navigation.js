import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go"
import { FaLocationDot } from "react-icons/fa6"

const Navigation = () => {

    const activeLink = "text-neutral-600 drop-shadow-md" 
    const normalLink = "text-white"

    return ( 
        <nav className="flex justify-evenly py-3">
            <NavLink to={"/"} className={({isActive}) => (isActive ? activeLink : normalLink)}><GoHome className="text-2xl"/></NavLink>
            <NavLink to={"/geolocation"} className={({isActive}) => (isActive ? activeLink : normalLink)}><FaLocationDot className="text-2xl"/></NavLink>
        </nav>
     );
}
 
export default Navigation;