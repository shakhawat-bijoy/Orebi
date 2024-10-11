import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Productitem from './layer/Productitem'
import Title from './layer/Title'
import axios from 'axios'

const Bestsellers = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      const slide = await axios.get("https://dummyjson.com/products")
      setProduct(slide.data.products)
    }

    getData()
  }, [])

  return (
    <div className='lg:pt-[118px] px-3 lg:px-0 md:pt-8 pt-5'>
      <Container>
        <Title text="Our Bestsellers"/>

        {/* Only display 4 products by slicing the array */}
        <div className='flex flex-wrap gap-10'>
          {product.filter((item, index) => index >= 4 && index < 12).map((item, index) => (
            <div key={index}>
              <Productitem className="mx-auto" 
                src={item.thumbnail} 
                title={item.title} 
                price={item.price}
                category={item.category}
                offer={item.discountPercentage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Bestsellers
