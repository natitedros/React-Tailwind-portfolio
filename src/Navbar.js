import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="shadow-md p-3">
            <div className="flex items-center justify-end p-3 lg:px-8 text-2xl">
                    <Link to="/" className="m-1.5 p-1.5">Home</Link>
                    <Link to="/about" className="m-1.5 p-1.5">About</Link>
                    <Link to="/projects" className="m-1.5 p-1.5">Projects</Link>
                    <Link to="/contacts" className="m-1.5 p-1.5">Contacts</Link>
                    <Link to="/resume" className="m-1.5 p-1.5">Resume</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;