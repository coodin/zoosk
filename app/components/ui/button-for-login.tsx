import { cn } from "@/lib/utils";

import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.ReactNode;
  text: string;
  iconSize?: number;
}

const LoginButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      iconSize = 30,
      text,
      Icon,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={cn(
          "flex-1 text-[#374756] not-italic font-semibold  flex items-center justify-center gap-2 border border-solid border-[#374756] rounded h-11",
          className
        )}
        ref={ref}
      >
        {Icon}
        <span className="text-base font-semibold">{text}</span>
      </button>
    );
  }
);

LoginButton.displayName = "Button";

export default LoginButton;
