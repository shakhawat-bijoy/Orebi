import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Productitem from './layer/Productitem';
import { useDispatch } from 'react-redux';
import { allCartInfo } from '../slice/cartSlice';
import axios from 'axios'; // Import axios

const Pagination = ({ itemsPerPage }) => {
  const [items, setItems] = useState([]);         // All items fetched from the API
  const [itemOffset, setItemOffset] = useState(0); // Tracks the current offset in the items array
  const [currentItems, setCurrentItems] = useState([]); // Items to display on the current page
  const [pageCount, setPageCount] = useState(0);   // Total number of pages

  const dispatch = useDispatch();

  // Fetch data on mount using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products"); // Using axios here
        setItems(response.data.products); // Get products from the response
      } catch (error) {
        console.log("Error fetching data with axios:", error);
      }
    };

    fetchData();
  }, []);

  // Update current items and page count when items or itemOffset changes
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset)); // Get current items based on itemOffset
    setPageCount(Math.ceil(items.length / itemsPerPage)); // Set total number of pages
  }, [items, itemOffset, itemsPerPage]);

  // Handle page change when user clicks a pagination button
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset); // Update the item offset based on the selected page
  };

  // Calculate endOffset outside of JSX so it's accessible for rendering
  const endOffset = itemOffset + itemsPerPage > items.length ? items.length : itemOffset + itemsPerPage;

  // Handle adding item to cart and dispatch the Redux action
  const manageAddToCart = (item) => {
    console.log(`Adding item to cart: ${item.title}`);
    dispatch(allCartInfo(item)); // Dispatch the item to the Redux store
  };

  return (
    <>
      <div className="flex flex-wrap gap-10">
        {currentItems && 
          currentItems.map((item, index) => (
            <div key={index}>
              {/* Correctly pass the manageAddToCart to onClick */}
              <Productitem 
                onClick={() => manageAddToCart(item)} // Use arrow function to avoid immediate invocation
                src={item.thumbnail} 
                title={item.title} 
                price={item.price}
                category={item.category}
                offer={item.discountPercentage}
              />
            </div>
        ))}
      </div>

      {/* ReactPaginate component for pagination controls */}
      <div className='flex justify-between items-center mt-[50px] flex-wrap gap-y-4'>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}

          nextClassName="hidden"
          previousClassName="hidden"

          renderOnZeroPageCount={null}

          containerClassName="pagination flex gap-x-4"

          pageClassName="page-item text-[#767676] lg:w-9 w-5 lg:h-9 h-5 border border-[#F0F0F0] hover:bg-[#262626] hover:text-white"

          pageLinkClassName="page-link w-full h-full flex justify-center items-center  text-sm font-normal"

          activeClassName="active text-white bg-[#262626]"
        />

        <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>
          Products from {itemOffset + 1} to {endOffset} of {items.length}
        </p>
      </div>
    </>
  );
}

export default Pagination;
