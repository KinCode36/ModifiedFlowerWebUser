import React from "react";
import { QRCodeSVG } from "qrcode.react";

const CardScanner = () => {
  return (
    <div
      className="
        flex h-[120px] w-[120px]
        items-center justify-center
        overflow-hidden
        rounded-[14px]
        bg-white
      "
    >
      <QRCodeSVG
        value="https://example.com/add-card"
        size={105}
        bgColor="#ffffff"
        fgColor="#111111"
        level="H"
      />
    </div>
  );
};

export default CardScanner;