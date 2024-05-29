import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import Image from './layer/Image'
import FooterLogo from '../assets/footer_logo.png'


const Footer = () => {
  return (
    <div className='md:pt-14  pt-8 lg:pb-[52px] pb-5  bg-[#F5F5F3] lg:mt-[140px] md:mt-[106px] mt-16'>
      <Container className="flex justify-between flex-wrap px-8 lg:px-0">

        <div className="left">

          <div className="menu md:flex lg:gap-x-36 gap-x-14">
          <ul>
              <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2'>MENU</h4>

              <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Home</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/shop">Shop</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/about">About</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/contacts">Contact</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6 ' to="/productInside">Journal</Link>
              </li>


            </ul>

            <ul>
              <h4 className='font-DM font-bold text-base text-[#262626] leading-6 md:mb-4 mb-2 mt-7 md:mt-0'>SHOP</h4>

              <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 1</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 2</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 3</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 4</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 5</Link>
              </li>


            </ul>

            <ul>
              <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2 mt-7 md:mt-0'>HELP</h4>

              <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Privacy Policy</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Terms & Conditions</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Special E-shop</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Shipping</Link>
              </li>
               <li>
                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Secure Payments</Link>
              </li>


            </ul>

            <ul className=' mt-7 md:mt-0'>

              <li>
                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='tel:(052) 611-5711'>(052) 611-5711</Link>
              </li>
               <li>
                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='mailto:company@domain.com'>company@domain.com</Link>
              </li>
               <li>
                <Link className='font-DM text-sm leading-6 text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</Link>
              </li>



            </ul>

          </div>

          <div className="icon flex gap-x-[26px] md:mt-16 mt-8">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />

          </div>

        </div>



        <div className="right flex flex-col justify-between">
          <Image className=' md:mb-0 mb-3 mt-7' src={FooterLogo}/>
          <p className='text-[#6D6D6D] text-sm font-DM '>2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>

      </Container>
    </div>
  )
}

export default Footer