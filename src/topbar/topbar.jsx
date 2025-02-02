import video from '../assets/svgs/video.svg'
import profile from '../assets/imgs/profile.png'


const Topbar = () => {
  return (
    <div className="py-[16px] pl-[132px] max-w-[95%] mx-auto flex justify-between  items-center">

    <div className='w-[60%]'>
        <form className="border-2 flex justify-between items-center rounded-lg border-[#b0b0b0]">
            <input type="text" className='outline-none w-full px-2 ' placeholder="Search"  />
            <button className="py-[4px] px-[21px] bg-[#F4F4F4] rounded-r-lg">Search</button>
        </form>
    </div>
    <div className='flex items-center gap-6'>
        <img src={video} alt="" />
        <img src={video} alt="" />
        <img src={video} alt="" />
        <img src={profile} alt="" />
    </div>

    </div>
  )
}

export default Topbar