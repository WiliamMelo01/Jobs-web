import React, { ChangeEvent, useContext, useId } from 'react';
import { CityContext, ICity } from '../contexts/City';

type LocationRadioTypes = {
  city: string;
};

export default function LocationRadio({ city }: LocationRadioTypes) {
  const id = useId();

  const { setCity } = useContext(CityContext) as ICity;

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(city);
  }

  return (
    <div className='text-myColors-300 flex gap-3 font-poppins font-medium'>
      <input
        type='radio'
        id={id}
        name='city'
        className='text-myColor-200 relative after:w-[9px] after:h-[9px] after:bg-transparent after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2  after:-translate-x-1/2 after:rounded-full after:checked:bg-myColors-200'
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{city}</label>
    </div>
  );
}
