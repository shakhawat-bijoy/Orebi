import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Button from './layer/Button'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaAngleRight, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Listitem from './layer/Listitem';
import Image from './layer/Image';
import p1 from '.././assets/p1.jpg'



const Searchbar = () => {

  let [show, setShow] = useState (false)

  useEffect(()=>{
    if(window){
      setShow(false)
  }else{
      setShow(true)
  }
  },[])


  let catagory = ()=>{
    setShow(!show)
  }



  let [show2, setShow2] = useState (false)

  let [showcart, setShowcart] = useState (false)

  // useEffect(()=>{
  //   if(window){
  //     setShow2(false)
  // }else{
  //     setShow2(true)
  // }
  // },[])

  // let acc = ()=>{
  //   setShow2(!show2)
  // }

  return (
    <div className='lg:py-10 py-2 bg-[#F5F5F3]'>

      <Container className='flex justify-between items-center font-DM flex-row px-3 lg:px-0'>

        <div onClick={catagory} className='relative order-1'>
          <p className='flex items-center gap-x-2  text-[#262626] text-sm cursor-pointer'>
            <HiOutlineBars3BottomLeft />
            <span className="hidden lg:inline">Shop by category</span>
            <span className="inline lg:hidden mr-4">Category</span>    
          </p>

          {
            show && (


              <ul className="absolute top-full left-0 bg-[#262626] text-[#767676] translate-y-6 lg:py-4 py-2 lg:w-[263px] w-[200px] lg:px-5 px-2 flex flex-col lg:gap-[16px] gap-[8px] z-50 ">

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Accesories ' /> 

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Furniture' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Electronics' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Clothes' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Bags' />

              <Listitem className='text-[#767676] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' href='/' text='Home appliances' />

            </ul>

            )
          }



        </div>

        <div className='relative lg:order-2 order-3'>
          <input type="text" placeholder='Search Products' className='lg:w-[601px] w-full lg:py-4 py-1 px-5 bg-white outline-none' />
          <FaSearch className='absolute right-1 lg:right-5 top-1/2 translate-y-[-50%]' />

        </div>

        <div  className='flex items-center gap-x-2 lg:gap-x-10  lg:order-3 order-2 z-20 pr-3'>
          <div  onClick={()=> setShow2(!show2)} className='flex items-center gap-x-1 cursor-pointer'>
            <FaUser />
            <IoMdArrowDropdown />

              {
                show2 && (
                  <div className='relative' >


             <div className="bottom  absolute lg:translate-x-[-100%] translate-x-[-95%] top-8  lg:w-[200px] w-[150px] bg-[#FFF]">
                  <div className="button flex flex-col w-full">
                    <Button className="lg:py-4 py-2 w-full" text="My Account" to="/myaccount"/>
                    <Button className="lg:py-4 py-2 w-full" text="Log In" to="/login"/>
                  </div>
                </div>    




            </div>
                )
              }






          </div>


          <div onClick={()=>setShowcart (!showcart)}
            className='relative cursor-pointer '>
            <FaShoppingCart />


             {
              showcart && (
                <div className="cart lg:w-[360px] w-[200px] absolute right-0 top-full lg:translate-y-[15px] translate-y-[20px]
                translate-x-[90%] lg:translate-x-0 z-30">

                <div className="top lg:p-5 bg-[#F5F5F3] flex justify-between items-center ">

                  <div className="left flex items-center lg:gap-x-5 gap-x-2">
                    <div className="image lg:w-20 w-10 lg:h-20 h-10 bg-slate-300">
                      <Image className="w-full h-full object-cover" src={p1}/>
                    </div>

                    <div className='font-DM text-sm font-bold text-[#262626] flex flex-col lg:gap-y-3'>
                      <h2 >Black Smart Watch</h2>
                      <p>$44.00</p>
                    </div>
                  </div>

                  <div className="icon">
                      

                    </div>
                </div>


                <div className="bottom lg:p-5 p-2 lg:pt-3.5 pt-0  bg-[#FFF]">
                  <h2 className='lg:mb-3 font-DM lg:text-base text-xs leading-6 text-[#767676]'>Subtotal: <span className='text-[#262626] font-DM lg:text-base text-xs font-bold leading-6'>$44.00</span></h2>
                  <div className="button flex lg:gap-x-5 gap gap-x-1 ">
                    <Button className="lg:py-4 py-2 lg:px-10 px-3 w-full" text="View Cart" to="/cart" />
                    <Button to="/checkout" className=" w-full lg:py-4 py-2 lg:px-10 px-3" text="Checkout" />
                  </div>
                </div>
              </div>
              )
             }



          </div>


        </div>

      </Container>

    </div>
  )
}

export default Searchbar