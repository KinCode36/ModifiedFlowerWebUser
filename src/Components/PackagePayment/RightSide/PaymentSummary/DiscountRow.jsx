import React from "react";

const DiscountRow = ({
  discount,
  coupon = "WelcomeHome20 applied!",
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[14px] font-medium">
          Discounts
        </p>

        <p className="mt-[3px] text-[13px] text-[#91A79D]">
          {coupon}
        </p>
      </div>

      <p className="text-[14px] font-medium">
        -${discount.toFixed(2)}
      </p>
    </div>
  );
};

export default DiscountRow;