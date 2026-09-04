import React, { useState } from "react";
import CardInput from "./CardInput";

const CardForm = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (field, value) => {
    setCardDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[9px]
        border border-[#d9d9d9]
        bg-white
      "
    >

      {/* Name */}
      <CardInput
        icon="user"
        placeholder="Name on card"
        value={cardDetails.name}
        onChange={(value) => handleChange("name", value)}
      />

      {/* Card Number */}
      <CardInput
        icon="card"
        placeholder="Card Number"
        value={cardDetails.cardNumber}
        onChange={(value) => handleChange("cardNumber", value)}
      />

      {/* Expiry + CVV */}
      <div className="flex">

        <CardInput
          placeholder="Exp (MM/YY)"
          value={cardDetails.expiry}
          onChange={(value) => handleChange("expiry", value)}
          className="w-1/2"
        />

        <CardInput
          placeholder="CVC / CVV"
          value={cardDetails.cvv}
          onChange={(value) => handleChange("cvv", value)}
          className="w-1/2 border-l"
        />

      </div>

    </div>
  );
};

export default CardForm;