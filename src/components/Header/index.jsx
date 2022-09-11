import LogoPNG from '../../assets/logo.png'
import ProfilePNG from '../../assets/guest.png'
import { Link } from 'react-router-dom'
import { RiVipCrownFill } from 'react-icons/ri'
import { RiFireFill } from 'react-icons/ri'
import { useContextHook } from '../../hooks/contexts'


const Header = () => {
  
  const { 
    userImage,
    setDisplayOverlay,
    setDisplayInsertImageModal
  } = useContextHook()

  return (
    <>
      <div className="w-full max-w-[800px] h-20 flex flex-row">
        <div className='flex h-auto w-9/12'>
              <Link to='/home' className='flex justify-start items-center'>
                  <img src={ LogoPNG } className='w-8' alt='' />
                  <span className='mx-2 font-bold'>|</span>
                  <div className='flex flex-col ml-1'>
                      <span className='font-bold text-base leading-4'>PERFORMANCE CONTROL</span>
                      <span className='text-xs'>.SITE</span>                         
                  </div> 
              </Link>
          </div>          
          <div onClick={()=>{setDisplayInsertImageModal(true); setDisplayOverlay('z-30')}} className='relative flex h-auto w-3/12 justify-end items-center'>
                <div className='flex justify-end items-center cursor-pointer'>
                  <div className='mr-1'>
                      <div className='flex flex-row justify-center items-center'>
                          <span className='mr-1'>0</span>
                          <RiVipCrownFill />      
                      </div>
                      <div className='flex flex-row justify-center items-center'>
                          <span className='mr-1'>0</span>
                          <RiFireFill />
                      </div>
                  </div>                    
                  <img src={ userImage ? userImage : ProfilePNG } referrerPolicy="no-referrer" className='rounded-full w-12 mr-1' alt=''/>
                </div>
          </div>          
      </div>
    </>
  )
}
export default Header