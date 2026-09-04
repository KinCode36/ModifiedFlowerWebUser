import React from "react";

const ShippingRow = ({
  shipping,
  method = "FedEx Ground",
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[14px] font-medium">
          Estimated Shipping
        </p>

        <p className="mt-[3px] text-[13px] text-[#91A79D]">
          {method}
        </p>
      </div>

      <p className="text-[14px] font-medium">
        ${shipping.toFixed(2)}
      </p>
    </div>
  );
};

export default ShippingRow;