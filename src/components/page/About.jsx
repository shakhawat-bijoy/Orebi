import React from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import p1 from '../../assets/p1.jpg'
import p13 from '../../assets/p13.jpg'
import Header from '../layer/Header'

const About = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
          <Header text="About" />

        <div className="product flex justify-between">

            <div className={` productitem lg:w-[780px] w-[160px] lg:h-[776px] h-[170px] group`}>

                 <div className="image w-full h-full relative overflow-hidden">
                     <img className={`w-full h-full object-cover`} src={p1} />

                     <button className={`absolute lg:bottom-16 bottom-3 left-[50%] translate-x-[-50%] lg:py-7 lg:px-24 py-2 px-4 bg-[#262626] text-[#FFFFFF] lg:font-bold lg:text-base font-normal text-[8px] border border-transparent hover:border-[#262626] hover:bg-white transition-all duration-300 hover:text-[#262626]`}>Our Brands</button>

                 </div>

            </div>


            <div className={` productitem lg:w-[780px] w-[160px] lg:h-[776px] h-[170px] group`}>

                 <div className="image w-full h-full relative overflow-hidden">
                     <img className={`w-full h-full object-cover`} src={p13} />

                     <button className={`absolute lg:bottom-16 bottom-3 left-[50%] translate-x-[-50%] lg:py-7 lg:px-24 py-2 px-4  bg-[#262626] text-[#FFFFFF] lg:font-bold lg:text-base font-normal text-[8px] border border-transparent hover:border-[#262626] hover:bg-white transition-all duration-300 hover:text-[#262626]`}>Our Brands</button>

                 </div>



            </div>

        </div>


        <div className="aboutText">
            <p className=' font-DM lg:text-[39px]  lg:leading-[52px] leading-5 font-normal lg:mt-32 mt-3'>
                Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            </p>
        </div>


        <div className="bottompart lg:mt-[118px] mt-10 flex  flex-wrap gap-y-5 justify-between ">

            <div className="vision w-[507px]">
                <h3 className='font-DM lg:text-[25px] text-lg font-bold lg:leading-9 leading-5 text-[#262626] lg:pb-3 pb-1'>Our Vision</h3>

                <p className='font-DM lg:text-base text-sm lg:leading-7 leading-5 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="vision w-[507px]">
                <h3 className='font-DM lg:text-[25px] text-lg font-bold lg:leading-9 leading-5 text-[#262626] lg:pb-3 pb-1'>Our Story</h3>

                <p className='font-DM text-base leading-7 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>

            <div className="vision w-[507px]">
                <h3 className='font-DM lg:text-[25px] text-lg font-bold lg:leading-9 leading-5 text-[#262626] lg:pb-3 pb-1'>Our Brands</h3>

                <p className='font-DM text-base leading-7 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>

        </div>




        </Container>
    </div>
  )
}

export default About