const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My React-Tailwind Blog</h1>
            <div className="flex items-center justify-end p-6 lg:px-8">
                    <a href="/" className="m-1.5 p-1.5">Home</a>
                    <a href="/about" className="m-1.5 p-1.5">About</a>
                    <a href="/projects" className="m-1.5 p-1.5">Projects</a>
                    <a href="/contacts" className="m-1.5 p-1.5">Contacts</a>
                    <a href="/resume" className="m-1.5 p-1.5">Resume</a>
            </div>
        </nav>
     );
}
 
export default Navbar;