import React from 'react'
import {Button, Navbar, TextInput, Tooltip} from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa' 
function Header() {
    let path=useLocation().pathname;
  return (
    <Navbar className='border-b-2 '>
        <Link to={''} className='  self-center whitespace-nowrap text-sm  sm:text-xl font-semibold '>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white'>Shamsher's </span> 
                 Blog
        </Link>
        <form action="" > 
            <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch} 
            className='hidden lg:inline group-hover:border-red-800' 
            
            />
        </form>
        <Button  className='w-12 h-10 lg:hidden flex items-center ' color='gray' pill  > <AiOutlineSearch/>   </Button>
        <div  className='flex gap-2 md:order-2 '>
        <Button className='hidden sm:inline  h-10 w-12' color='gray' pill > <FaMoon/>
         </Button>
         
         <Link to={""} > 
         <Button
         gradientDuoTone='purpleToBlue' 
         >
            Sign In 
         </Button>
         </Link>
         <Navbar.Toggle/>
         
        </div>
        <Navbar.Collapse>
            <Navbar.Link as={'div'} active={path=='/'}  >
                <Link to="" >Home</Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} active={path=='/about'}>
                <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} active={path=='/projects'}>
                <Link to="/projects">Projects</Link>
            </Navbar.Link>
            
         </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;