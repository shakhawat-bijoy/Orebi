import React, { useState } from 'react'
import Slider from 'react-slick';
import Image from './layer/Image';
import b1 from '../assets/banner.jpg'

const Banner = () => {

  let [active, setActive] = useState(0)

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,



    beforeChange: (prev, next)=>{
      setActive(next);
    },

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={

          i == active 
          ? {
            color: "#262626",
            borderRight: "2px #262626 solid",
            padding: "9px 10px 9px 0"
          } : 
          {
            color: "transparent",
            borderRight: "2px white solid",
            padding: "9px 10px 9px 0"
          }

          }
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {}
      },
      {
        breakpoint: 600,
        settings: {}
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <ul 
              style={{
                margin: "0px", 
                display: "flex",
                }}
              > 
              {" "}
              {dots}{" "} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              className={`text-xs ${
                i == active
                ? "text-[#262626] border-b-2 border-[#262626] px-1.5 pb-1 " : "text-transparent border-b-2 border-[#fff] px-1.5 pb-1 "
              }`}
              // style=
              // {

              //   i == active 
              //   ? {
              //     color: "#262626",
              //     borderBottom: "2px #262626 solid",
              //     padding: "0px 5px 4px 5px"
              //   } 
              //   : 
              //   {
              //     color: "transparent",
              //     borderBottom: "2px white solid",
              //     padding: "0px 5px 4px 5px"
              //   }

              // }
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ],
  };

  return (
    <div>
      <Slider {...settings}>
      <div className=' bg-slate-400'>
        <Image className="w-full" src={b1} href="#" />
      </div>
      <div className=' bg-slate-400'>
        <Image className="w-full" src={b1} href="#" />
      </div>
      <div className=' bg-slate-400'>
        <Image className="w-full" src={b1} href="#" />
      </div>

    </Slider>
    </div>
  )
}

export default Banner