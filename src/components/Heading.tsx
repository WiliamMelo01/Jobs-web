import React, { memo } from "react";

export function Heading() {
  return (
    <div className="w-full h-[80px] font-poppins text-myColors-100 text-2xl py-3">
      <span className="font-bold">Wiliam</span>{" "}
      <span className="font-light">Jobs</span>
    </div>
  );
}

export default memo(Heading);
