import React, { useState } from 'react';

import WorldIcon from '../assets/images/world.png';
import LocationRadio from './LocationRadio';

export default function SearchConfig() {
  const [fullTimeIsChecked, setfullTimeIsChecked] = useState(false);

  return (
    <div className='w-full pt-7 font-poppins min-[768px]:w-[30%]'>
      <div className='flex items-center gap-3 mb-8'>
        <input
          type='checkbox'
          id='fulltime'
          onChange={(e) => setfullTimeIsChecked(e.target.checked)}
          className='h-4 w-4'
          checked
        />
        <label
          htmlFor='fulltime'
          className='text-myColors-300 font-medium text-sm'>
          Full time
        </label>
      </div>
      <p className='font-bold text-myColors-400 uppercase text-sm mb-[14px]'>
        Location
      </p>
      <div className='w-full h-[48px] bg-myColors-500 shadow-md flex items-center rounded-[4px]'>
        <img
          src={WorldIcon}
          alt='World icon'
          className='w-[15px] h-[15px] mx-[14px]'
        />
        <input
          type='text'
          className='flex-1 h-full text-ellipsis text-myColors-400 font-roboto font-normal outline-none px-2'
          placeholder='City, state, zip code or country'
        />
      </div>
      <div className='flex flex-col gap-[15px] mt-7'>
        <LocationRadio city='São Paulo' />
        <LocationRadio city='Rio de Janeiro' />
        <LocationRadio city='Minas Gerais' />
      </div>
    </div>
  );
}
