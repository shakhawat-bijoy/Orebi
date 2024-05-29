import React from 'react'
import Container from './layer/Container'
import Productitem from './layer/Productitem'
import Title from './layer/Title'


import p5 from '../../src/assets/p5.jpg'
import p6 from '../../src/assets/p6.jpg'
import p7 from '../../src/assets/p7.jpg'
import p8 from '../../src/assets/p8.jpg'

const Bestsellers = () => {
  return (
    <div className='lg:pt-[118px] px-3 lg:px-0 md:pt-8 pt-5'>
        <Container>
            <Title text="Our Bestsellers"/>


            <div className='flex justify-between md:mt-12 mt-5 flex-wrap gap-y-5'>
                <Productitem src={p5} offer=""/>
                <Productitem src={p6} offer=""/>
                <Productitem src={p7} offer=""/>
                <Productitem src={p8} offer=""/>
            </div>

        </Container>
    </div>
  )
}

export default Bestsellers