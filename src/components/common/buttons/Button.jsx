import React from "react";

const Button = ({
  children,
  variant = "solid",
  onClick,
  className = "",
  iconRight = null,
  textColor = "text-white",
  bgColor = "bg-[#ED8936]",
  borderColor = "border-white",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-4 h-[40px] whitespace-nowrap rounded-xl transition font-medium";

  let variantClasses = "";
  let shadowClasses = "";

  if (variant === "solid") {
    variantClasses = `${bgColor} ${textColor} hover:brightness-110`;
    shadowClasses = "shadow-[8px_8px_20px_0px_#45090059]  hover:shadow-md hover:opacity-80 hover:scale-105";
  } else if (variant === "outline") {
    variantClasses = `border dark:${borderColor} border-black hover:bg-white  hover:text-black`;
// shadowClasses = "shadow-[8px_8px_20px_0px_#45090059]  hover:shadow-md hover:opacity-80 hover:scale-105"; // No shadow for outline
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variantClasses} ${shadowClasses} ${className}`}
      {...props}
    >
      
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
