import React from 'react'
import Container from './layer/Container'
import Productitem from './layer/Productitem'

import p9 from '../../src/assets/p9.jpg'
import p10 from '../../src/assets/p10.jpg'
import p11 from '../../src/assets/p11.jpg'
import p12 from '../../src/assets/p12.jpg'
import Title from './layer/Title'

const Specialoffers = () => {
  return (
    <div className='md:pt-32 pt-8  px-3 md:px-0'>
        <Container>
        <Title text="Special Offers"/>

         <div className='flex justify-between md:mt-12 mt-5 flex-wrap gap-y-5'>
            <Productitem src={p9}  offer="20% Discount"/>
            <Productitem src={p10} offer="20% Discount"/>
            <Productitem src={p11} offer="20% Discount"/>
            <Productitem src={p12} offer="20% Discount"/>
          </div>

        </Container>
    </div>
  )
}

export default Specialoffers