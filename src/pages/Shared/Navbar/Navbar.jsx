import { Link, NavLink } from "react-router-dom";
import navLogo from '../../../assets/navLogo3.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const handleLogout = () => {
        userSignOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {/* <li></li> */}
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start mr-8">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>

                </div>
                <img className="w-28 hidden md:block lg:block" src={navLogo} alt="" />
                <a className="btn btn-ghost font-bold  font-dancingScript text-3xl ">Cool Coder</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>

            </div>
            <div className="navbar-end">
                <label className="swap mr-5">
                    <input type="checkbox" />
                    <div className="swap-on">Dark</div>
                    <div className="swap-off">Light</div>
                </label>


                {
                    user && <div className="tooltip" data-tip={user.displayName}>
                        <button className="btn btn-ghost btn-circle avatar mr-2">
                            <div className="w-10 rounded-full" >
                                <img alt="user image" src={user.photoURL} />
                            </div>
                        </button>
                    </div>
                }


                {
                    user ? <>

                        <button onClick={handleLogout} className="btn">Sign Out</button>
                    </>
                        : <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;