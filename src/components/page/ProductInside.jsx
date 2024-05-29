import React, { useEffect, useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'

import Image from '../layer/Image'
import Button from '../layer/Button'
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.svg'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'


const ProductInside = () => {

  let [show, setShow] = useState (false)
  let [show2, setShow2] = useState (false)
  let [show3, setShow3] = useState (false)
  let [show4, setShow4] = useState (false)

  let [isActive, setIsActive] = useState(false);

  let toggleActive = () => {
    setIsActive(!isActive);
  };

  let [isActive2, setIsActive2] = useState (false);

  let toggleActive2 = ()=> {
    setIsActive2 (!isActive2)
  }


  return (
    <div>
        <Container>
            <Breadcrumb/>






































            <div className='w-[782px] h-[782px]  mt-12'>
                <Title text="Product"/>
                <div className="review mt-[18px] flex gap-x-[25px]">
                  <div className="icon text-[#FFD881] w-[70px] h-3 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  </div>
                  
                    <p className="text-sm font-normal text-[#767676]">1 Review</p>
                  
                </div>

                <div className='flex items-center my-6 gap-x-6'>
                  <p className='line-through text-base text-[#767676] font-normal'>$88.00</p>
                  <p className='text-[#262626] font-bold text-xl'>$44.00</p>
                </div>
                <p className='border-b border-[#F0F0F0] mb-7'></p>

                <div className='flex gap-x-14'>
                  <p className='text-base font-bold leading-6'>COLOR:</p>
                  <div className='flex items-center gap-x-4'>
                    <Image src={s1}/>
                    <Image src={s2}/>
                    <Image src={s3}/>
                    <Image src={s4}/>
                    <Image src={s5}/>
                  </div>
                </div>


                <div className='mt-8'>
                <label className='font-DM font-bold lg:text-base text-sm leading-7 text-[#262626] lg:mr-[76px]' >

                <span className="hidden lg:inline">SIZE:</span>
                </label>
                <select className='lg:w-[139px] lg:h-9 py-1 lg:px-5 px-1 lg:text-base text-sm leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]'>

                <option className='p-7'value="S">
                S</option>

                <option className='p-7'value="M">
                M</option>

                <option className='p-7'value="L">
                L</option>

                <option className='p-7'value="XL">
                XL</option>

                </select>
                </div>


                <p className='text-base font-bold leading-6 py-[30px] border-b border-[#F0F0F0]'>QUANTITY:</p>

                <div className='flex items-center gap-x-7 border-b border-[F0F0F0]'>
                  <p className='text-base font-bold leading-6 my-[30px]'>STATUS:</p>
                  
                  <p className="text-sm font-normal text-[#767676]">In stock</p>
                </div>

                <div className='mt-8 flex gap-x-5 items-center border-b border-[#F0F0F0] pb-[30px]'>
                  <Button className="py-4 w-[200px]" text="Add to Wish List"/>
                  <Button className="py-4 w-[200px]" text="Add to Cart"/>
                </div>



                <div onClick={()=> setShow3 (!show3)} className='flex justify-between items-center relative cursor-pointer'>
                <p className='text-base font-bold w-full leading-6 py-[30px] border-b border-[#F0F0F0]'>FEATURES  & DETAILS</p>


                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show3? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show3? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>

                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 ${show3? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>


                <div onClick={()=> setShow4 (!show4)} className='flex justify-between items-center cursor-pointer relative'>
                <p className='text-base font-bold leading-6 py-[30px] w-full border-b border-[#F0F0F0]'>SHIPPING & RETURNS</p>


                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show4? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show4? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>




                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 ${show4? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
               



            </div>



            <div className='mt-[123px]'>



              <div className='flex  gap-x-16 relative'>

                <div onClick={toggleActive} className={` ${isActive ? 'active !text-[#262626] font-bold' : ''}`}>

                <h5 
                 onClick={ ()=> setShow (!show)} className={`text-xl  leading-7 cursor-pointer  transition-all duration-300 `}>Description</h5>
              

                </div>

                <div onClick={toggleActive2} className={` ${isActive2 ? 'active !text-[#262626] font-bold' : ''}`}>

                <h5 
                  onClick={()=> setShow2(!show2)} 
                  className={`text-xl  leading-7 cursor-pointer  transition-all duration-300 `}>Reviews (1)</h5>
              

                </div>


              </div>



              <p className={` bg-[#1e1e1e] text-[#f6f0f0]  max-w-[600px] ${show? "opacity-100 visible z-10" : " opacity-0 hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum exercitationem assumenda odit. Ut minima saepe unde aperiam eveniet voluptatibus enim perferendis temporibus, illo libero neque quis velit atque itaque quia molestias fuga cupiditate expedita ipsum, vitae alias explicabo, odio officiis. Amet facilis ex magnam odit hic tenetur? Cumque eligendi laborum ipsum voluptatibus repellat commodi! Totam libero voluptate neque nulla laboriosam illum dicta numquam nihil optio necessitatibus, qui nemo pariatur odit incidunt quasi itaque corporis aperiam amet nam dignissimos laudantium quaerat. Quod illum fugit labore magni doloremque obcaecati, voluptatibus quos dolore beatae assumenda quibusdam quas voluptates nesciunt voluptatum, aut nemo.</p>




              {
                show2 && (
                  <div className=''>
                  <p className='text-sm text-[#767676] leading-8 mt-[42px] border-b border-[#F0F0F0] pb-4'>1 review for Product</p>
  
                  <div className='flex items-center gap-x-9 mt-8'>
                    <p className='text-[#262626] text-base leading-8'>John Ford</p>
  
                    <div className="icon text-[#FFD881] w-[70px] h-3 flex">
                      
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
  
                    </div>
                    
                  </div>
  
                  <p className='mt-4 pb-4 border-b border-[#F0F0F0]'>Lorem Ipsum is simply dummy text of the    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
  
                  <div className='max-w-[780px] mt-14 flex flex-col gap-y-6'>
                    <Title className="!text-xl mb-12" text="Add a Review"/>
  
                    <Input className="!w-full" text="Name" type="text" placeholder="Your name here"/>
  
                    <Input className="!w-full" text="Email" type="text" placeholder="Your email here"/>
  
                    <div>
                      <h3 className='text-base font-bold leading-6 '>Review</h3>
                      <input type="text" placeholder='Your review here' className='w-full lg:pt-[10px] lg:pb-[87px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
                  </div>
  
  
  
                    <Button className="w-[200px] py-4" text="Post"/>
                  </div>
  
  
  
  
                </div>
                )
              }




















            </div>







































        </Container>
    </div>
  )
}

export default ProductInside