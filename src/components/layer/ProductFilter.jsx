import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus,FaMinus } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";



const ProductFilter = ({catTitle, LgCatTitle, cat, cat2, cat3, cat4, cat5}) => {

  let [show, setShow] = useState(false)
  let [show2, setShow2] = useState(false)
  let [showheading, setShowheading] = useState(false)

  return (
    <div>
        <h3
         onClick={()=> setShowheading(!showheading)}
         className='text-[#262626] lg:text-xl text-sm font-bold lg:mb-8 mb-4 flex justify-between items-center cursor-pointer'>
        
        <span className="hidden lg:inline">{LgCatTitle}</span>
            <span className="inline lg:hidden text-sm mr-1">{catTitle}</span>
        <GoTriangleRight className={` transition-all duration-300 ${showheading?"rotate-90":""}`}/>

        </h3>

        {
            showheading && (<ul className='flex flex-col lg:gap-y-5'>
            <li 
              className='relative overflow-hidden lg:pb-5 pb-2 border-b border-[#F0F0F0]'
              onClick={()=> setShow(!show)}>
              <Link className='flex justify-between relative text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3'><span>{cat}</span> <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show? "opacity-100 visible":"opacity-0 invisible"}`}/></Link>

              <ul className={` transition-all duration-500 ${show? "static": "absolute translate-x-[-100%] invisible"}`}>

                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>
                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>
                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>
                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>

                

              </ul>



            </li>   



            <li>
              <Link className='flex justify-between relative text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pt-2 lg:pt-0 lg:pb-5 pb-2   border-b border-[#F0F0F0]'>
                <span>{cat2}</span></Link> 
            </li>


            <li 
              className='relative overflow-hidden lg:pb-5 border-b border-[#F0F0F0]'
              onClick={()=> setShow2(!show2)}>
              <Link className='flex justify-between relative text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pt-2 lg:pt-0 lg:pb-5 pb-2 '>
                <span>{cat3}</span> 
                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show2? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> 
                <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show2? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </Link>


              <ul className={` transition-all duration-500 ${show2? "static": "absolute translate-x-[-100%] invisible"}`}>

                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>

                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>

                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>

                <li>
                  <Link className=' text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pl-4 block pt-3'>Sub Catagory</Link>
                </li>

              </ul>



            </li> 



            <li>
              <Link className='flex justify-between relative text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pt-2 lg:pt-0 lg:pb-5 pb-2   border-b border-[#F0F0F0]'>
                <span>{cat4}</span></Link> 
            </li>

            <li>
              <Link className='flex justify-between relative text-[#767676] lg:text-base text-[10px] lg:leading-7 leading-3 pt-2 lg:pt-0 lg:pb-5 pb-2  border-b border-[#F0F0F0]'>
                <span>{cat5}</span></Link> 
            </li>

          </ul>)
        }

    </div>
  )
}

export default ProductFilter