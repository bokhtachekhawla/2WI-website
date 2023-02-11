import React ,{ useState} from 'react';
import Image from "next/image";
import WTM_Algiers_White from "../../images/logos/WTM_Algiers_white.png";
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [isOpen , SetIsOpen] = useState(false);
  return (
    <div className=''>
        {/* For Main NavContainer  */}
        <nav className='  w-full  bg-background '>

            <div className='w-full '>

                <div className=' flex items-center h-20 w-full'> 
                {/* Logo's section  */}
                    <div className='flex items items-centre mx-20 justify-between w-full'>
                        <div className='flex justify-centre items-centre flex-shrink-0 cursor-pointer w-44 h-12'>
                            <Image src={WTM_Algiers_White} alt="WTM Algiers" />
                        </div>
                    </div>
                    {/*  */}
                    <div className='hidden mx-20 md:block w-full '>
                        <div className='ml-10 flex items-baseline space-x-8 text-centre'>
                            <Link 
                            activeClass='Home'
                            to='Home'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer hover:bg-secondary text-secondary hover:text-white px-3 py-2 rounded-md text-md font-semibold'  >
                                Home
                            </Link>
                            <Link 
                            activeClass='About'
                            to='About'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-secondary font-semibold px-3 py-2 text-md hover:font-white '  >
                                About
                            </Link>
                            <Link 
                            activeClass='Partners'
                            to='Partners'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-secondary font-semibold px-3 py-2 text-md hover:font-white '  >
                                Partners
                            </Link>
                            <Link 
                            activeClass='Speakers'
                            to='Speakers'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-secondary font-semibold px-3 py-2 text-md hover:font-white '  >
                                Spekers
                            </Link>
                            <Link 
                            activeClass='Agenda'
                            to='Agenda'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-secondary font-semibold px-3 py-2 text-md hover:font-white '  >
                                Agenda
                            </Link>
                            <Link 
                            activeClass='JoinUs'
                            to='JoinUs'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className=' text-centre cursor-pointer hover:bg-purple bg-secondary text-white hover:text-white px-3 py-2 rounded-md text-md font-semibold w-20  '  >
                                Join Us
                            </Link>
                        </div>
                    </div>
                    {/* Mobile reponsive  */}
                    <div className='mr-10 flex md:hidden'>
                        <button
                        onClick = {() => SetIsOpen(!isOpen)} type="button" 
                        className=' text-white inline-flex items-center justify-center p-2 rounded hover:bg-secondary focus:outline-none focus: ring-offset-purple focus:ring-white'
                        aria-controls='mobile-menu'
                        aria-expanded='false'
                        >
                            <span className='sr-only'> Open main menu </span>
                            { (! isOpen) ? (
                                <svg className='block h-6 w-6 ' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24 ' stroke='currentColor' aria-hidden='true'>
                                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            ) : (
                                <svg 
                                    className='block h-6 w-6 '
                                    xmlns='http:www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24 '
                                    stroke='currentColor'
                                    aria-hidden='true'>
                                   <path  
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth="2"
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>               
            </div>
            <Transition
                show={isOpen}
                enter="transtion ease-out duration-100 transform"
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                 {
                    (ref) => (
                        <div className='md:hidden id =mobile-menu '>
                            <div
                                ref={ref}
                                className="bg-background px-2 pt-2 pb-3 space-y-1 sm:px-3 "
                            >
                                <Link
                                    href='/home'
                                    activeClass='home'
                                    to='home'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-secondary text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Home
                                </Link>
                                <Link
                                    href='/about'
                                    activeClass='about'
                                    to='about'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-secondary text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        About
                                </Link>
                                <Link
                                    href='/partners'
                                    activeClass='partners'
                                    to='partners'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-secondary text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Partners
                                </Link>
                                <Link
                                    href='/speakers'
                                    activeClass='speakers'
                                    to='speakers'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-secondary text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Speakers
                                </Link>
                                <Link
                                    href='/agenda'
                                    activeClass='agenda'
                                    to='agenda'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-secondary text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Agenda
                                </Link>
                                <Link
                                    href='/joinus'
                                    activeClass='joinus'
                                    to='joinus'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-purple text-white hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Join Us
                                </Link>
                            </div>
                        </div>
                    )
                 }
            </Transition>
        </nav>
    </div>
  )
}

export default Navbar