import React from "react";

export default function FullTime({ className }: { className?: string }) {
  return (
    <div
      className={`w-fit py-[8px] px-[6px] border border-myColors-300 rounded-[4px] whitespace-nowrap  ${className}`}
    >
      <p className="text-myColors-300  font-bold text-xs">Full time</p>
    </div>
  );
}
