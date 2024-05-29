import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import ad1 from "../assets/ad1.jpg"
import ad2 from "../assets/ad2.jpg"
import ad3 from "../assets/ad3.jpg"


const Sale = () => {
  return (
    <div className='lg:pt-44 pt-4 '>
        <Container className='flex justify-between'>
            <div className='left lg:w-[780px] w-[48%] lg:h-[780px] h-auto '>
                <Image className='w-full h-full object-contain'src={ad1} href="" />
            </div>

            <div className='left lg:w-[780px] lg:h-[780px] h-auto w-[48%] flex flex-col justify-between lg:gap-y-0'>

                <div className='child w-full lg:h-[370px] h-auto '>
                    <Image className='w-full h-full object-contain' src={ad2} href=""/>

                </div>

                <div className='child w-full lg:h-[370px] h-auto '>
                    <Image className='w-full h-full object-contain'src={ad3 } href="" />

                </div>


            </div>            
        </Container>
    </div>
  )
}

export default Sale