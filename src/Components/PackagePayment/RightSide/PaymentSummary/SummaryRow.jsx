import React from "react";

const SummaryRow = ({ label, amount }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[14px] font-medium">
        {label}
      </p>

      <p className="text-[14px] font-medium">
        {amount}
      </p>
    </div>
  );
};

export default SummaryRow;