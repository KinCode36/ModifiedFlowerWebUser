import React from "react";

const CardLogo = ({ type }) => {
  if (type === "visa") {
    return (
      <div className="ml-2.5 flex h-[27px] w-[38px] items-center justify-center rounded border border-gray-200 bg-white text-[11px] font-bold italic text-blue-800">
        VISA
      </div>
    );
  }

  if (type === "amex") {
    return (
      <div className="ml-2.5 flex h-[27px] w-[38px] items-center justify-center rounded bg-blue-600 text-[8px] font-bold leading-[8px] text-white">
        AMEX
      </div>
    );
  }

  if (type === "discover") {
    return (
      <div className="ml-2.5 flex h-[27px] w-[38px] items-center justify-center rounded border border-orange-300 bg-white text-[6px] font-bold">
        <span className="text-gray-800">DISC</span>
        <span className="text-orange-500">OVER</span>
      </div>
    );
  }

  if (type === "mastercard") {
    return (
      <div className="ml-2.5 flex h-[27px] w-[38px] items-center justify-center rounded border border-gray-200 bg-white">
        <div className="relative h-[15px] w-[22px]">
          <span className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full bg-red-500" />

          <span className="absolute right-0 top-0 h-[15px] w-[15px] rounded-full bg-orange-400 opacity-90" />
        </div>
      </div>
    );
  }

  return null;
};

export default CardLogo;