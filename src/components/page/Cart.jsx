import React, { useState } from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Listitem from '../layer/Listitem'
import Button from '../layer/Button'
import Title from '../layer/Title'
import Image from '../layer/Image'
import { ImCross } from 'react-icons/im'
import p12 from '../../assets/p12.jpg'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa'



const Cart = () => {

  let [number, setNumber] = useState(1)

  return (
    <div>
        <Container className="px-3 lg:px-0">
          <Header text="Cart"/>

          <div className="upper">
            <ul className='flex lg:gap-x-[340px] bg-[#F5F5F3] lg:py-8 py-3'>
              <Listitem className="lg:ml-6 ml-3 !text-[#262626]" text="Product" />
              <Listitem className="!text-[#262626] ml-14 " text="Price" />
              <Listitem className="!text-[#262626] ml-10" text="Quantity" />
              <Listitem className="!text-[#262626] ml-10" text="Total" />
            </ul>
          </div>

          <div className="middle lg:py-7 py-2 flex items-center">
            <ImCross className='lg:ml-5 ml-1 text-[8px]' />

            <Image className="lg:w-[100px] lg:h-[100px] w-[35px] h-[35px] lg:ml-10 ml-2 lg:mr-5 mr-1" src={p12}/>

            <p className='text-[#262626] lg:text-base text-[8px] lg:font-bold font-normal lg:leading-6 mr-2'>Product name</p>

            <p className='text-[#262626] lg:text-xl text-[8px] font-bold lg:ml-[160px]'>$44.00</p>
            <p className='lg:ml-[310px] lg:text-base text-[8px]'>
            <div className='flex items-center border'>
                  <div
                     onClick={()=> number<=1 ? setNumber(1):setNumber(--number)} className='w-14 h-8 flex items-center justify-center'>
                      <FaMinus />
                    </div>
                    <p className='w-14 h-10 flex items-center justify-center'>{number}</p>
                    <div 
                    onClick={()=> setNumber(++number)} className='w-14 h-8 flex items-center justify-center'><FaPlus/></div>
                    
                  </div>
            </p>
            <p className='text-[#262626] lg:text-xl text-[8px] font-bold lg:ml-[300px]'>$44.00</p>
            

          </div>



          <div className="down lg:py-5 py-3 flex justify-between items-center">



            <div className="right flex items-center lg:gap-x-10 gap-x-4">
              <select name="" id="" className='lg:w-[239px] lg:py-[10px] lg:pl-5 text-base leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]'>

              <option className='p-7'value="SIZE">
              SIZE</option>

              <option className='p-7'value="Featured">
              sm</option>

              <option className='p-7'value="Featured">
              m</option>

              <option className='p-7'value="Featured">
              x</option>
              <option className='p-7'value="Featured">
              xl</option>

              </select>

              <Link>
              
               <button className='text-[#262626] text-sm  lg:font-bold font-semibold'>Apply coupon</button>
              </Link>


            </div>


            
            <div>
              <Link>
              
               <button className='text-[#262626] text-sm lg:font-bold font-semibold mr-5'>Update cart</button>
              </Link>
            </div>


          </div>



        <div className='flex justify-between mt-14'>


            <div>
              <p></p>
            </div>

            <div className="total lg:w-[644px] w-[320px]">
              <h5 className='text-[#262626] text-xl font-bold mb-6 text-end'>Cart totals</h5>

              <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px]'>Subtotal</p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>389.99$</p>
              </div> 
              <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px]'>Total</p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>389.99$</p>
              </div> 

              <div className='flex justify-end'>

                <Button to={'/checkout'} className="py-4 px-7 mt-[30px]" text="Proceed to Checkout"/>
              </div>
            </div>


          </div>


         

          


        </Container>
    </div>
  )
}

export default Cart