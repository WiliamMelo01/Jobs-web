import React from 'react';
import { useNavigate } from 'react-router-dom';

import FullTime from './FullTime';
import JobCitys from './JobCitys';
import JobPostDate from './JobPostDate';

type JobCardTypes = {
  imgURL: string;
  fulltime?: boolean;
  companyName: string;
  jobTitle: string;
  location: string[];
  createdAt: Date;
  description: string[];
  howToApply: string;
};

export default function JobCard({
  imgURL,
  fulltime = false,
  companyName,
  createdAt,
  jobTitle,
  location,
  description,
  howToApply,
}: JobCardTypes) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/details', {
      state: {
        title: jobTitle,
        companyName,
        imgURL,
        fulltime,
        createdAt,
        description,
        citys: location,
        howToApply,
      },
    });
  }

  return (
    <div
      className='w-full h-auto bg-myColors-500 shadow-md rounded-[4px] flex font-roboto hover:cursor-pointer'
      onClick={handleClick}>
      <div className=''>
        <img
          src={imgURL}
          alt='Company logo'
          className='w-[90px] h-[90px] m-3'
        />
      </div>
      <div className='flex-1 pt-3 pl-4  '>
        <p className='text-myColors-300  font-bold text-xs'>{companyName}</p>
        <p className='text-myColors-300 font-normal text-[16px]'>{jobTitle}</p>
        <div
          className='min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between pr-1'
          style={{
            width: !fulltime ? '100%' : 'auto',
            justifyContent: !fulltime ? 'end' : 'space-between',
          }}>
          {fulltime && <FullTime className='min-[768px]:justify-self-start' />}
          <div className='w-[90%] flex items-center justify-between mt-6 mb-4 min-[768px]:w-auto min-[768px]:gap-[20px]'>
            <JobCitys citys={location} />
            <JobPostDate createdAt={createdAt} />
          </div>
        </div>
      </div>
    </div>
  );
}
