import React, { useState } from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Title from '.././layer/Title'
import Button from '../layer/Button'

import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { FaMinus } from 'react-icons/fa'



const Contacts = () => {

  let [show, setShow] = useState (false)
  let [show2, setShow2] = useState (false)
  let [show3, setShow3] = useState (false)
  return (
    <div>
        <Container className='font-DM px-3 lg:px-0'>
          <div>
            <Header text="Contacts" />
          </div>


          <div className="from lg:h-[493px] lg:w-[782px]">

            <div className='lg:mt-10 mt-5 flex flex-col gap-y-[23px]'>
              <Title text="Fill up a Form" />




              <div>
                <h3 className='text-base font-bold leading-6 '>Name</h3>
                <input type="text" placeholder='Your name here' className='w-full lg:pt-[10px] lg:pb-[17px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
              </div>


              <div>
                <h3 className='text-base font-bold leading-6 '>Email</h3>
                <input type="text" placeholder='Your email here' className='w-full lg:pt-[10px] lg:pb-[17px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
              </div>


              <div>
                <h3 className='text-base font-bold leading-6 '>Message</h3>
                <textarea type="text" placeholder='Your message here' className='w-full lg:pt-[10px] lg:pb-[87px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
              </div>


            </div>


            {/* <button className="bg-[#262626] text-[#FFFFFF]  py-4 px-[85px] mt-[30px] ">Post</button> */}

            <Button className="bg-[#262626] text-[#FFFFFF]  lg:py-4 py-2 lg:px-[85px] px-10 lg:mt-[30px] mt-5" text="Post"/>


          </div>




          <div className='lg:mt-[140px] mt-10 relative lg:pb-0 pb-80'>
            <iframe className="w-full lg:h-[572px] h-[220px]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652.0034070684023!2d90.37906939272749!3d23.747257914212753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714647912145!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


              <div className='lg:w-[452px] absolute lg:top-20  lg:left-20 translate-y-5 bg-[#FFFFFF] px-5 '>

                <div onClick={()=> setShow (!show)}
                className='relative'
              >
                <h4 className='text-base font-bold leading-6 lg:py-[30px] py-3 lg:pb-5 flex justify-between items-center cursor-pointer relative'>Lithuania Office <span>
                  <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <GoTriangleDown className={`absolute top-1/2 translate-y-[-50%] right-0 ${show? "opacity-100 visible":"opacity-0 invisible rotate-90"}`}/>
                </span>
                
                </h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show? "static": "absolute translate-x-[-100%] invisible"}`}>

                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7 pb-2 bg-white'>Mon - Fri: 9am - 6pm</Link>
                    </li>

                  </ul>
              </div> 

              <div onClick={()=> setShow2 (!show2)}
               className='relative'
              >
                <h4 className='text-base font-bold leading-6 lg:py-[30px] py-3 lg:pb-5 flex justify-between items-center cursor-pointer relative'>Lithuania Office <span>
                  <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show2? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <GoTriangleDown className={`absolute top-1/2 translate-y-[-50%] right-0 ${show2? "opacity-100 visible":"opacity-0 invisible rotate-90"}`}/>
                </span>
                
                </h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show2? "static": "absolute translate-x-[-100%] invisible"}`}>

                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7 pb-2 bg-white'>Mon - Fri: 9am - 6pm</Link>
                    </li>

                  </ul>
              </div>



              <div onClick={()=> setShow3 (!show3)}
              className='relative'
              >
                <h4 className='text-base font-bold leading-6 lg:py-[30px] py-3 lg:pb-5 flex justify-between items-center cursor-pointer relative'>Lithuania Office <span>
                  <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show3? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <GoTriangleDown className={`absolute top-1/2 translate-y-[-50%] right-0 ${show3? "opacity-100 visible":"opacity-0 invisible rotate-90"}`}/>
                </span>
                
                </h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show3? "static": "absolute translate-x-[-100%] invisible"}`}>

                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7 pb-2 bg-white'>Mon - Fri: 9am - 6pm</Link>
                    </li>

                  </ul>
              </div>



              </div>










          </div>






        </Container>
    </div>
  )
}

export default Contacts