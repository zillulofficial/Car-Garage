import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks= <>
    <NavLink to="/"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Home</a></li></NavLink>
    <NavLink to="/about"><li><a className="hover:bg-[#ff3838cb] hover:text-white">About</a></li></NavLink>
    <NavLink to="/services"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Services</a></li></NavLink>
    <NavLink to="/blog"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Blog</a></li></NavLink>
    <NavLink to="/contact"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Contact</a></li></NavLink>
    </>
    return (
        <div className="container mx-auto mb-12">
            <div className="navbar bg-base-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className="font-bold text-5xl Rancho text-[#FF3811] hover:text-white">Velocity</span><sub className="text-md hover:text-white">Vault</sub></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn text-[#FF3811] bg-white border border-[#FF3811] hover:text-white hover:bg-[#FF3811] hover:border-none">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;