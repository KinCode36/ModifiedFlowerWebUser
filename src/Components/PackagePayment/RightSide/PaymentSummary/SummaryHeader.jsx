import React from "react";

const SummaryHeader = ({ total }) => {
  return (
    <div>
      <h2 className="text-[20px] font-semibold tracking-[-0.3px]">
        Payment Summary
      </h2>

      <div className="mt-[35px]">
        <p className="text-[14px] font-medium text-[#B7C5BD]">
          Order Total
        </p>

        <p className="mt-[2px] text-[38px] font-light tracking-[-1px]">
          ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default SummaryHeader;