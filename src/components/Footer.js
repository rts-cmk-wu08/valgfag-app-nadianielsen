import Navigation from "./Navigation";


const Footer = () => {
    return ( 
        <footer className="flex justify-center">
            <article className="bg-neutral-300/50 backdrop-blur-sm w-[20rem] h-12 rounded-full fixed bottom-0 my-6 shadow-md">
                <Navigation />
            </article>
        </footer>
     );
}
 
export default Footer;