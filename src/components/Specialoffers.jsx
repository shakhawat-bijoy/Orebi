import React from 'react'
import Container from './layer/Container'
import Productitem from './layer/Productitem'
import Title from './layer/Title'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Specialoffers = () => {

  const [product, setProduct] =  useState([])


  useEffect(() => {
    const getData = async () => {
      const slide = await axios.get("https://dummyjson.com/products")
      setProduct(slide.data.products);
      
    }

    getData()
  }, [])
  


  return (
    <div className='md:pt-32 pt-8  px-3 md:px-0'>
        <Container>
        <Title text="Special Offers"/>

         <div className='flex flex-wrap gap-10'>
            {
              product.map((item, index) => (
                <div key={index}>
                    <Productitem 
                      className="mx-auto" 
                      src={item.thumbnail} 
                      title={item.title} 
                      price={item.price}
                      category={item.category}
                      offer={item.discountPercentage}
                    />
                  </div>
              ))
            }
          </div>

        </Container>
    </div>
  )
}

export default Specialoffers