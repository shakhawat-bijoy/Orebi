import React, { useState } from 'react';
import Container from '../layer/Container';
import Header from '../layer/Header';
import { Link } from 'react-router-dom';

const Myaccount = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <p>
          <div>
            <h5 className='mb-9'>
              <span className='text-[#767676] text-base font-normal leading-7'>Hello </span>
              <span className='text-[#262626] text-base font-normal leading-7'>admin </span>
              <span className='text-[#767676] text-base font-normal leading-7'>(not </span>
              <span className='text-[#262626] text-base font-normal leading-7'>admin</span>
              <span className='text-[#767676] text-base font-normal leading-7'>? </span>
              <span className='text-[#262626] text-base font-normal leading-7'>Log out</span>
              <span className='text-[#767676] text-base font-normal leading-7'>)</span>
            </h5>
            <p>
              <span className='text-[#767676] text-base font-normal leading-7'>From your account dashboard you can view your </span> 
              <span className='text-[#262626] text-base font-normal leading-7'>recent orders, </span>
              <span className='text-[#767676] text-base font-normal leading-7'>manage your </span>
              <span className='text-[#262626] text-base font-normal leading-7'>shipping and billing addresses, </span>
              <span className='text-[#767676] text-base font-normal leading-7'>and </span>
              <span className='text-[#262626] text-base font-normal leading-7'>edit your password and account details.</span>
            </p>
          </div>
        </p>;
      case 'Others':
        return <p>Others content goes here.</p>;
      case 'Downloads':
        return <p>Downloads content goes here.</p>;
      case 'Addresses':
        return <p>Addresses content goes here.</p>;
      case 'Account details':
        return <p>Account details content goes here.</p>;
      case 'Logout':
        return <p>Logout content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Container className="font-DM px-3 lg:px-0">
        <Header text="My Account" />
        <div className='flex'>
          <ul className='w-[234px] h-[406px] flex flex-col gap-y-5'>
            {['Dashboard', 'Others', 'Downloads', 'Addresses', 'Account details', 'Logout'].map((tab) => (
              <li
                key={tab}
                className={`pb-5 border-b border-[#F0F0F0] text-base leading-7 font-normal ${activeTab === tab ? 'font-extrabold text-xl transition-all duration-500 text-[#000000]' : 'text-[#767676]'}`}
              >
                <Link to="#" onClick={() => setActiveTab(tab)}>{tab}</Link>
              </li>
            ))}
          </ul>
          <div className='w-[918px] h-[126px] ml-10'>
            {renderContent()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Myaccount;
