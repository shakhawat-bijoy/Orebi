import React, { useState } from 'react'
import Container from '../layer/Container'
import ProductFilter from '../layer/ProductFilter';
import Header from '../layer/Header';
import Pagination from '../Pagination';


import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const Product = () => {

  let [number, setNumber] = useState (12)

  let selectNumber =(element)=>{
    let numberConverter = Number (element.target.value)
      setNumber (numberConverter)
   
  }

  return (
    <div>
      <Container className="px-3 lg:px-0">

        <div>
          <Header text="Products"/>
        </div>


        <div className="main flex justify-between font-DM ">
        <div className="sidebar w-[370px] ">

          <ProductFilter
            LgCatTitle='Shop by Category'
            catTitle="Category"
            cat="Category 1" 
            cat2="Category 2"
            cat3="Category 3" 
            cat4="Category 4" 
            cat5="Category 5"  />
          <ProductFilter 
            LgCatTitle='Shop by Color'
            catTitle="Color"

            cat="Color 1" 
            cat2="Color 2"
            cat3="Color 3" 
            cat4="Color 4" 
            cat5="Color 5" />
          <ProductFilter 
            LgCatTitle='Shop by Brand' 
            catTitle="Brand"

            cat="Brand 1" 
            cat2="Brand 2"
            cat3="Brand 3" 
            cat4="Brand 4" 
            cat5="Brand 5"
          />
          <ProductFilter 
            LgCatTitle='Shop by Price'
            catTitle="Price"
 
            cat="$0.00 - $9.99" 
            cat2="$10.00 - $19.99"
            cat3="$20.00 - $29.99" 
            cat4="$30.00 - $39.99" 
            cat5="$40.00 - $69.99"
          />

        </div>



          <div className="products w-[1190px] ">

            {/* ================================= */}

          <div className={`lg:w-full flex justify-between items-center lg:mb-[60px] mb-5`}>

            <div className="icon flex lg:gap-x-5 gap-x-2">

              <div className='lg:w-9 w-7  lg:h-9 h-7 border border-[#F0F0F0] flex justify-center items-center text-[#737373] hover:bg-[#262626] hover:text-[#fff] cursor-pointer transition-all duration-300'> 
                <IoGrid />
              </div> 

              <div className='lg:w-9 w-7 lg:h-9 h-7 border border-[#F0F0F0] flex justify-center items-center text-[#737373] hover:bg-[#262626] hover:text-[#fff] cursor-pointer transition-all duration-300'>
              <FaThList />
              </div>

            </div>

            <div className="right flex lg:gap-x-10 gap-x-2">
              <label className='font-DM lg:text-base text-sm leading-7 text-[#767676] lg:pr-3' for="">

              <span className="hidden lg:inline">Sort by:</span>
              </label>
              <select name="" id="" className='lg:w-[239px] py-1 lg:px-5 px-1 lg:text-base text-sm leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]'>

              <option className='p-7'value="Featured">
              Featured</option>

              <option className='p-7'value="Featured">
              Featured</option>

              <option className='p-7'value="Featured">
              Featured</option>

              <option className='p-7'value="Featured">
              Featured</option>

              </select>

              <label className='font-DM text-base leading-7 text-[#767676] lg:pr-3' for="">

              <span className="hidden lg:inline">Show:</span>


              </label>
              <select 

              onChange={selectNumber}


              name="" id="" className='lg:w-[139px] py-1 lg:px-5 text-base leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]'>

              <option className='p-7'value="12">
              12</option>

              <option className='p-7'value="24">
              24</option>

              <option className='p-7'value="36">
              36</option>

              <option className='p-7'value="48">
              48</option>

              </select>


            </div>

          </div>

          {/* ============================================= */}

            {/* <Productitem src={p1}/>
            <Productitem src={p2}/>
            <Productitem src={p3}/>
            <Productitem src={p4}/>
            <Productitem src={p1}/>
            <Productitem src={p2}/>
            <Productitem src={p3}/>
            <Productitem src={p4}/>
            <Productitem src={p1}/>
            <Productitem src={p2}/>
            <Productitem src={p3}/>
            <Productitem src={p4}/> */}

          <Pagination itemsPerPage={number} />


          </div>
        </div>

      </Container>
    </div>
  )
}

export default Product