import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Listitem from './layer/Listitem'
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../assets/logo.png'



const Navbar = () => {

    let [show, setShow] = useState(false)


    useEffect(()=>{

    function size (){
        if(window.innerWidth < 1024){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    size();

    window.addEventListener("resize", size)

    },[])

    let oreb = ()=>{
        setShow(!show)
    }

  return (
    <nav className='bg-[#f0f4f5] lg:py-5'>
        <Container className='flex items-center py-3 justify-between relative px-3 lg:px-0'>
            <div className="logo">
                <Image href='/' src={logo} />
            </div>


                    <div className={`menu py-3 px-4 lg:py-0 absolute lg:px-0 left-0 top-full bg-[#f0f4f5] lg:static lg:bg-transparent flex w-full justify-center transition-all duration-700  ${show? "opacity-100 visible z-50" : " opacity-0 invisible"}`}>

                      <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-[40px] z-50'>
                         <Listitem href="/" text="Home"/>
                         <Listitem href="/shop" text="Shop"/>
                         <Listitem href="/about" text="About"/>
                         <Listitem href="/contacts" text="Contacts"/>
                        <Listitem href="/signup" text="Sign Up"/>
                </ul>
            </div>


            <FaBars onClick={oreb} className='lg:hidden cursor-pointer' />




        </Container>
    </nav>
  )
}

export default Navbar



