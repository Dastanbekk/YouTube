import { Link, NavLink } from "react-router-dom"
import logo from '../assets/svgs/logo.svg'
import home from '../assets/svgs/home.svg'

const Sidebar = () => {
  return (
    <div className="py-[16px] px-[10px]">
        <div className="px-[24px] mb-[24px]">
            <Link to={"/"} ><img src={logo} alt="" /></Link>
        </div>
        <ul className="flex flex-col ">
            <li>
                <NavLink to={"/"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Home</NavLink>
            </li>
            <li>
                <NavLink to={"/trending"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" />Trending</NavLink>
            </li>
            <li>
                <NavLink to={"/subscription"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Subscriptions</NavLink>
            </li>
            <div className="h-[1px] bg-[#b0b0b0] my-[12px]">

            </div>
            <li>
                <NavLink to={"/library"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Library</NavLink>
            </li>
            <li>
                <NavLink to={"/history"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> History</NavLink>
            </li>
            <li>
                <NavLink to={"/yourvideos"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Your videos</NavLink>
            </li>
            <li>
                <NavLink to={"/watchlater"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Watch later</NavLink>
            </li>
            <li>
                <NavLink to={"/likedvideos"} className="rounded-xl flex px-[24px] gap-[23px] items-center text-[20px] py-[10px] hover:bg-[#F4F4F4] hover:font-bold"><img src={home} alt="Home" /> Liked videos</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar