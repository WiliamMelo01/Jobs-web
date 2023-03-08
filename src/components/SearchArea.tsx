import React, { useContext, useEffect, useRef, useState } from 'react';
import SuitcaseIcon from '../assets/images/suitcase.png';
import { IJobContext, JobContext } from '../contexts/Jobs';

type SearchAreaProps = {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchArea({ setIsError }: SearchAreaProps) {
  const [SearchParam, setSearchParam] = useState('');

  const { setJobs } = useContext(JobContext) as IJobContext;

  async function handleSearch() {
    setSearchParam('');
    console.log(SearchParam);

    const result = await fetch(
      `https://wiliam-melo-job-api.up.railway.app/jobs/tags/${SearchParam}`,
    );
    const data = await result.json();

    if (data.length > 0) {
      setJobs(data);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='w-full h-[138px] rounded-lg grid flex items-center bg-builds bg-cover bg-center bg-no-repeat '>
      <div className='w-[80%] h-[55px] bg-myColors-500 flex items-center rounded max-w-[790px] justify-self-center'>
        <img src={SuitcaseIcon} alt='Suitcase icon' className='h-4 w-4 mx-2' />
        <input
          type='text'
          className='w-[60%] h-full top-0 left-0 text-myColors-400 text-ellipsis outline-none  px-2 border-none min-[650px]:flex-1'
          placeholder='Title, companies, expertise or benefits'
          onChange={(e) => setSearchParam(e.target.value)}
          value={SearchParam}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          type='button'
          className='w-[40%] h-[90%] bg-myColors-200 m-1  rounded font-roboto font-medium text-white min-[650px]:w-[146px] min-[650px]:justify-self-end'
          onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
