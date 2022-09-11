import { Link } from 'react-router-dom'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { MdOutlineStorage } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import FooterButtons from './FooterButtons';

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[800px] h-16 flex justify-between items-center px-5 border-t border-slate-600">
        <FooterButtons icon={<BsFillHouseDoorFill />} link='/home' size='text-3xl' />
        <div className='relative flex justify-center items-center'>
            <span className='absolute w-20 h-14 top-[-1rem] bg-black z-0'></span>
            <div>
                <Link to='/performance'>
                    <button type='button' className='relative z-1 text-3xl mb-2.5' >
                        <FaUserClock />
                    </button>
                </Link>
            </div>
        </div>
        <FooterButtons icon={<MdOutlineStorage/>} link='/details' size='text-3xl ml-1'/>
      </div>
    </>
  )
}

export default Footer