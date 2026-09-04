import React from "react";
import { ChevronRight } from "lucide-react";

const OrderReviewButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex h-[52px] w-[183px]
        items-center justify-center
        gap-[15px]
        rounded-[11px]
        bg-white
        px-[20px]
        text-[14px]
        font-semibold
        text-[#222]
        shadow-sm
        transition-all
        duration-200
        hover:bg-[#F3F0E7]
        hover:shadow-md
      "
    >
      <span>Order Review</span>

      <ChevronRight
        size={19}
        strokeWidth={1.8}
      />
    </button>
  );
};

export default OrderReviewButton;