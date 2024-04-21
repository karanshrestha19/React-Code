import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/mob.png'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
  const[navisopen, setnavIsOpen]=useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openNav= () => { 
    setnavIsOpen(!navisopen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

  }, []);


  return(
        <>
        <div className={`fixed w-full  text-white lg:text-2xl md:text-xl px-10 max-sm:hidden ${isScrolled ? 'bg-textC' : 'bg-purple-900'}`}>
          <ul className={`flex space-x-16 items-center ${isScrolled ? 'item-center': ''}`}>
          <img src={logo} className='lg:h-20 lg:w-20 md:h-14 md:w-14 w-12 h-12' />
            <Link to='/' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">Home</Link>
            <Link to='/aboutus' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">About</Link>
            <Link to='/contact' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">Contact</Link>
            <Link to='/services' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">Services</Link>
            <Link to='/details' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">Details</Link>
            <Link to='/additems' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">Add Items</Link>
            <Link to='/myskill' className=" hover:text-black cursor-pointer  px-2 hover:bg-yellow-400">My Skills</Link>
          </ul>
        </div>

        <div className='hidden max-sm:block bg-purple-500 text-white text-2xl'>
          <div className='flex w-full items-center'>
          <img src={logo} className=' w-12 h-12'/>
          <div className='flex items-center' onClick={openNav}><GiHamburgerMenu  className='h-9 pl-4 w-9'/></div>
          </div>
          {navisopen && (
          <div className='flex-col text-center '>
          <div className='py-5 '><Link to='/' className=" hover:text-black cursor-pointer hover:bg-yellow-400">Home</Link></div>
          <div className='py-5 '><Link to='/aboutus' className=" hover:text-black cursor-pointer hover:bg-yellow-400">About</Link></div>
          
          <div className='py-5 '><Link to='/contact' className=" hover:text-black cursor-pointer  hover:bg-yellow-400">Contact</Link></div>
          <div className='py-5'><Link to='#' className=" hover:text-black cursor-pointer hover:bg-yellow-400">Services</Link></div>
        </div>
         )
        }
        </div>

        </>
     
    )
  }
