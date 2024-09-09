import { Link, NavLink } from "react-router-dom";


const SecondNavbar = () => {
    const navLinks= <>
    <NavLink to="/order"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Order</a></li></NavLink>
    <NavLink to="/orderReview"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Order Review</a></li></NavLink>
    <NavLink to="/manage"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Manage Inventory</a></li></NavLink>
    <NavLink to="/login"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Login</a></li></NavLink>
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
                    <Link to='/'><a className="btn btn-ghost text-xl"><span className="font-bold text-5xl Rancho text-[#FF3811] hover:text-white">Velocity</span><sub className="text-md hover:text-white">Vault</sub></a></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SecondNavbar;