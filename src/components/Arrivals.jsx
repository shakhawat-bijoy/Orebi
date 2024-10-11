import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Productitem from './layer/Productitem'
import Slider from 'react-slick'
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import Title from './layer/Title'
import axios from 'axios'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute right-5 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong />

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='w-16 h-16 absolute left-5 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center z-50 cursor-pointer'
    style={{ ...style, display: "block", }}
    onClick={onClick}
  >
    <FaArrowLeftLong />

  </div>
  );
}

function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:right-5 right-1 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong />

    </div>
  );
}

function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:left-5 left-1 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center z-50'
    style={{ ...style, display: "block", }}
    onClick={onClick}
  >
    <FaArrowLeftLong />

  </div>
  );
}


const Arrivals = () => {

    var settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },    {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }, 
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            nextArrow: <SampleNextArrow2 />,
            prevArrow: <SamplePrevArrow2 />,

          }
        }
      ]


    };

    const [product, setProduct] =  useState([])


    useEffect(() => {
      const getData = async () => {
        const slide = await axios.get("https://dummyjson.com/products")
        setProduct(slide.data.products);
        
      }

      getData()
    }, [])
    



  return (
    <div className=' pt-8 md:pt-20'>
        <Container>
        <Title className='px-3 lg:px-0' text="New Arrivals"/>
        </Container>



        <Container className="max-w-[1640px] lg:pt-12 md:pt-8 pt-5 ">

        <div>
            <Slider {...settings}>
              {
                product.map((item, index )=> (
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

            </Slider>
          </div>


        </Container>





    </div>
  )
}

export default Arrivals