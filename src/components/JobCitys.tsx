import React from 'react';
import WorldIcon from '../assets/images/world.png';

export default function JobCitys({ citys }: { citys: string[] }) {
  return (
    <div className='flex items-center gap-[7px]'>
      <img src={WorldIcon} alt='World icon' className='w-[15px] h-[15px]' />
      <p className='font-medium text-myColors-400 font-xs'>
        {citys.join(', ')}
      </p>
    </div>
  );
}
