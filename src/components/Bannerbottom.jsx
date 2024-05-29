import React from 'react'
import Container from './layer/Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping,MdRefresh } from "react-icons/md";



const Bannerbottom = () => {
  return (
    <div className='border-b border-[#F0F0F0]'>
      <Container className='lg:py-5 py-2 flex justify-between items-center font-DM'>

        <p className='flex items-center lg:gap-x-2 lg:font-normal lg:text-base text-[10px] text-[#6D6D6D] '>

          <PiNumberTwoBold className='text-black lg:text-xl text-xs' />
          Two years warranty
        </p>

        <p className='flex items-center lg:gap-x-2 gap-x-1 lg:font-normal lg:text-base text-[10px] text-[#6D6D6D] '>

          <MdLocalShipping className='text-black lg:text-xl text-xs' />
          Free shipping
        </p>

        <p className='flex items-center lg:gap-x-2 gap-x-1 lg:font-normal lg:text-base text-[10px] text-[#6D6D6D] '>

          <MdRefresh className='text-black lg:text-xl text-xs  ' />
          Return policy in 30 days
        </p>


      </Container>
    </div>
  )
}

export default Bannerbottom