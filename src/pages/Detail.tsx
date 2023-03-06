import React from "react";
import { Heading } from "../components/Heading";

import Leftarrow from "../assets/images/leftarrow.png";
import FullTime from "../components/FullTime";
import JobPostDate from "../components/JobPostDate";
import JobCitys from "../components/JobCitys";
import { useLocation, useNavigate } from "react-router-dom";

export default function Detail() {
  const location = useLocation();

  const {
    howToApply,
    title,
    fulltime,
    createdAt,
    companyName,
    citys,
    description,
    imgURL,
  } = location.state as {
    howToApply: string;
    title: string;
    fulltime: boolean;
    companyName: string;
    citys: string[];
    createdAt: Date;
    description: string[];
    imgURL: string;
  };

  const navigation = useNavigate();

  function handleBack() {
    navigation("/");
  }

  return (
    <div className="px-3 min-[768px]:px-[30px] min-[1024px]:px-[80px] min-[1440px]:px-[150px] min-[1650px]:px-[200px] font-poppins pb-10">
      <Heading />
      <div
        className="flex gap-[15px] mb-9 hover:cursor-pointer"
        onClick={handleBack}
      >
        <img src={Leftarrow} alt="Left arrow icon" className="w-[18px]" />
        <p className=" font-medium text-myColors-200 text-sm">Back to search</p>
      </div>
      <p className="text-myColors-400 uppercase font-bold mb-4">How to aplly</p>
      <p className="text-myColors-300 text-sm mb-9">{howToApply}</p>
      <h1 className="text-myColors-300 font-bold text-2xl mb-1">{title}</h1>
      <div className="flex flex-col gap-4 mb-9">
        {fulltime && <FullTime />}
        <JobPostDate createdAt={createdAt} />
      </div>
      <div className="flex gap-3">
        <img src={imgURL} alt="Company logo" className="w-12 h-12" />
        <div className="flex flex-col gap-[10px]">
          <p className="font-roboto font-bold text-myColors-300 text-lg ">
            {companyName}
          </p>
          <JobCitys citys={citys} />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-myColors-300 font-roboto mt-9">
        {description.map((paragraph) => {
          return <p className="">{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
