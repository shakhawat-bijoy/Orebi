import React from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Title from '../layer/Title'
import Input from '../layer/Input'

const Checkout = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
            <Header text="Checkout"/>



            <p className='text-[#767676] lg:text-base text-sm font-normal leading-7'>Have a coupon? <span className='text-[#262626] lg:text-base text-sm font-normal leading-7'>Click here to enter your code</span></p>

            <Title className="lg:mt-[120px] mt-5 lg:mb-[42px] mb-5" text="Billing Details"/>


            <div className='flex flex-wrap lg:gap-y-6 lg:gap-x-10 gap-x-5'>

                <Input type="text" text="First Name *" placeholder="First Name " />

                <Input type="text" text="Last Name *" placeholder="Last Name " /> 

            </div>

            <div className='flex flex-col lg:gap-y-6 gap-y-3 mt-6 lg:mb-32 mb-8'>

             <Input className="!w-full" type="text" text="Companye Name (optional)" placeholder="Company Name " />
            
            <div className='border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs'>
                <h5 className='lg:text-base text-sm font-bold leading-6 text-[#262626]'>Country *</h5>
                    <select className='outline-none pb-4 pt-[10px]'>

                        <option className='p-7'value="SIZE">
                Please select</option>

                         <option className='p-7'value="Featured">
                Bangladesh</option>

                         <option className='p-7'value="Featured">
                USA</option>

                        <option className='p-7'value="Featured">
                Germany</option>
                        <option className='p-7'value="Featured">
                UK</option>

                </select>
            </div>

             <Input className="!w-full" type="text" text="Street Address *" placeholder="House number and street name"
              />
            <Input className="!w-full" placeholder="Apartment, suite, unit etc. (optional)"
              />

             <Input className="!w-full" type="text" text="Town/City *" placeholder="Town/City" />

             <Input className="!w-full" type="text" text="County (optional)" placeholder="County " />

             <Input className="!w-full" type="text" text="Post Code *" placeholder="Post Code " />

             <Input className="!w-full" type="text" text="Phone *" placeholder="Phone" />

             <Input className="!w-full" type="text" text="Email Address *" placeholder="Email " />

            </div>

             

            <Title text="Additional Information"/>

            <div className='lg:mt-10 mt-4 lg:mb-32 mb-6'>
            <h3 className='lg:text-base text-sm font-bold leading-6 '>Other Notes (optional)</h3>
                <input type={`text`} placeholder="Notes about your order, e.g. special notes for delivery." className='w-full lg:pt-[10px] lg:pb-[87px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs' />
        </div> 





            <Title text="Your Order"/>

            <div className='lg:max-w-[644px] w-[320px] flex flex-col justify-between items-center lg:mt-12 mt-5 flex-wrap mx-auto lg:mx-0'>
              <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px]'>Product</p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>Total</p>
              </div>     

               <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px] '>Product name x 1 </p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>389.99$</p>
              </div> 

              <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px] '>Subtotal </p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>389.99$</p>
              </div>              
              
              <div className='flex'>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[230px] '>Total </p>
                <p className='text-[#262626] text-base font-bold leading-6 border border-[#F0F0F0] py-4 pl-5 lg:w-[322px] w-[100px]'>779.98$</p>
              </div>

            </div>


















        </Container>
    </div>
  )
}

export default Checkout