import React from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Title from '../layer/Title'
import Button from '../layer/Button'
import Input from '../layer/Input'

const Login = () => {
  return (
    <div className='font-DM px-3 lg:px-0'>
        <Container>
            <Header text="Login"/>

            <div className='border-b border-[#F0F0F0]'> 
              <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
              </p>
            </div>


            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Returning Customer"/>


          <div className='flex flex-wrap lg:gap-x-10 gap-x-5'>
           <Input type="text" text="Email address" placeholder="company@domain.com" />           
           
            <Input type="Password" text="Password" placeholder="" /> 

               
          </div>


          <div className='lg:mt-7 mt-3 border-b border-[#F0F0F0] lg:pb-[70px] pb-10'>
           <Button className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px]" text="Log in"/>
          </div>


          <div className='lg:pt-[58px]'>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>

            <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7  pb-8 lg:pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <Button className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px]" text="Continue"/>
          </div>





















        </Container>
    </div>
  )
}

export default Login