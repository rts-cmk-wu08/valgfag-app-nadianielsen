import { FiSearch } from "react-icons/fi"


const Search = () => {


    return ( 
        <article className="flex justify-center my-2">
            <input type="search" name="search" id="search" className="w-[70%] h-12 rounded-full bg-neutral-300/40 border-2 relative placeholder:text-neutral-100" placeholder=" Search location"/>
            <FiSearch className="absolute text-2xl my-2.5 ml-44"/>
        </article>
     );
}
 
export default Search;