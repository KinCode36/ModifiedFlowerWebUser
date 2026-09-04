import React from "react";
import CardScanner from "./CardScanner";
import CardForm from "./CardForm";

const NewCardDetails = () => {
  return (
    <div className="w-full max-w-[320px] font-sans text-[#222]">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[16px] font-semibold">
          New card details
        </h2>

        <p className="mt-1 max-w-[280px] text-[11px] leading-[14px] text-[#444]">
          Scan your card using your mobile to autofill or
          manually enter your details below
        </p>
      </div>

      {/* QR Scanner */}
      <CardScanner />

      {/* Nickname */}
      <p className="mb-5 mt-8 text-[12px] text-[#999]">
        Enter card nickname
      </p>

      {/* Card Form */}
      <CardForm />

    </div>
  );
};

export default NewCardDetails;