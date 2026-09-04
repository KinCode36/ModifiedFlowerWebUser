import React from "react";
import { UserRound, CreditCard } from "lucide-react";

const CardInput = ({
  icon,
  placeholder,
  value,
  onChange,
  className = "",
}) => {

  const renderIcon = () => {
    if (icon === "user") {
      return (
        <UserRound
          size={16}
          strokeWidth={1.5}
          className="text-[#888]"
        />
      );
    }

    if (icon === "card") {
      return (
        <CreditCard
          size={16}
          strokeWidth={1.5}
          className="text-[#888]"
        />
      );
    }

    return null;
  };

  return (
    <div
      className={`
        flex h-[49px]
        items-center
        border-b border-[#dedede]
        px-[16px]
        last:border-b-0
        ${className}
      `}
    >

      {/* Icon */}
      {icon && (
        <div className="mr-[18px] flex shrink-0">
          {renderIcon()}
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-full
          w-full
          bg-transparent
          text-[11px]
          text-[#333]
          outline-none
          placeholder:text-[#999]
        "
      />

    </div>
  );
};

export default CardInput;