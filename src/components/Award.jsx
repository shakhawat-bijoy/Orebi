import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import award from '../assets/award.jpg'

const Award = () => {
  return (
    <div>
        <Container className='md:pt-32 pt-8 px-3 lg:px-0'>
        <Image className='w-full h-full object-cover'src={award} href="" />
        </Container>
    </div>
  )
}

export default Award