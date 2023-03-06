import React from "react";

import HourIcon from "../assets/images/hour.png";

type JobPostDateProps = {
  createdAt: Date;
};

function calculateDateDifference(dateToCompare: Date): string {
  const oneDayInMs = 24 * 60 * 60 * 1000;
  const now = new Date().getTime();
  const differenceInDays = Math.round(
    (now - dateToCompare.getTime()) / oneDayInMs
  );
  if (differenceInDays <= 1) {
    return "Today";
  }
  return `${differenceInDays} days ago`;
}

export default function JobPostDate({ createdAt }: JobPostDateProps) {
  return (
    <div className="flex items-center gap-[7px]">
      <img src={HourIcon} alt="World icon" className="w-[15px] h-[15px]" />
      <p className="font-medium text-myColors-400 font-xs">
        {calculateDateDifference(createdAt)}
      </p>
    </div>
  );
}
