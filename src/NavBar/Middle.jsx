import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { sidebarButtons } from "../utils/demo";
const MiddleButtons = () => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-10 text-sm font-medium">
      {sidebarButtons.map((button) => (
        <NavLink
          key={button.id}
          to={button.path}
          className={({ isActive }) =>
            `relative py-2.5 px-4 md:px-3 w-full md:w-auto text-center transition-colors duration-200 ${
              isActive
                ? "text-white"
                : "text-white/55 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {button.title}

              {isActive && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#6B8F71]"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default MiddleButtons;