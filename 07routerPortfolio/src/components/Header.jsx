
import { Link, NavLink } from "react-router-dom";

function Header(){
    return (
        <>
            <div className="w-screen bg-pink-400 py-5 px-20 text-xl flex justify-between">
                <Link to="/" className="">
                    Portfolio: Karan Kumar
                </Link>
                <div className="flex gap-5 justify-center items-center transition">
                    <NavLink to='/' 
                        className={({isActive})=>`${isActive ? "text-white " : ""} hover:text-white`}>
                        Home
                    </NavLink>
                    <NavLink to='/about'
                        className={({isActive})=>`${isActive ? "text-white " : ""} hover:text-white`}>
                        About
                    </NavLink>
                    <NavLink to='/contact'
                        className={({isActive})=>`${isActive ? "text-white " : ""} hover:text-white`}>
                        Contact
                    </NavLink>
                    <NavLink to='/projects'
                        className={({isActive})=>`${isActive ? "text-white " : ""} hover:text-white`}>
                        Projects
                    </NavLink> 
                </div>
                <div className="flex gap-8">
                    <Link to="https://github.com/KaranKumar099">Github</Link>
                    <Link to="https://www.linkedin.com/in/karankumar973/">LinkedIn</Link>
                </div>
            </div>
        </>
    )
}
export default Header