import React from "react";

import SummaryHeader from "./PaymentSummary/SummaryHeader";
import SummaryRow from "./PaymentSummary/SummaryRow";
import DiscountRow from "./PaymentSummary/DiscountRow";
import ShippingRow from "./PaymentSummary/ShippingRow";
import SummaryDivider from "./PaymentSummary/SummaryDivider";
import OrderReviewButton from "./PaymentSummary/OrderReviewButton";

const RightSide = () => {

  // Payment data
  const subtotal = 284.2
  const discount = 56.85;
  const shipping = 25.00;
  const taxes = 14.21;

  // Calculate final total
  const total = subtotal - discount + shipping + taxes;

  const handleOrderReview = () => {
    console.log("Order Review clicked");
  };

  return (
    <div
      className="
        flex h-screen w-[40%]
        flex-col
        bg-[#003B29]
        px-[40px]
        py-[60px]
        text-white
      "
    >

      {/* Main Content */}
      <div className="w-full max-w-[405px]">

        {/* Header */}
        <SummaryHeader total={total} />

        {/* Subtotal + Discount */}
        <div className="mt-[32px] space-y-[20px]">

          <SummaryRow
            label="Subtotal"
            amount={`$${subtotal.toFixed(2)}`}
          />

          <DiscountRow
            discount={discount}
            coupon="WelcomeHome20 applied!"
          />

        </div>

        {/* Divider */}
        <SummaryDivider />

        {/* Shipping + Taxes */}
        <div className="space-y-[20px]">

          <ShippingRow
            shipping={shipping}
            method="FedEx Ground"
          />

          <SummaryRow
            label="Taxes"
            amount={`$${taxes.toFixed(2)}`}
          />

        </div>

        {/* Divider */}
        <SummaryDivider />

        {/* Final Total */}
        <div className="flex items-start justify-between">

          <div>
            <p className="text-[14px] font-semibold">
              Order Total
            </p>

            <p className="mt-[3px] text-[13px] text-[#91A79D]">
              Your purchase supports 3 impact areas ✨
            </p>
          </div>

          <p className="text-[14px] font-medium">
            ${total.toFixed(2)}
          </p>

        </div>

      </div>

      {/* Button */}
      <div className="mt-auto flex justify-end pt-[50px]">
        <OrderReviewButton
          onClick={handleOrderReview}
        />
      </div>

    </div>
  );
};

export default RightSide;