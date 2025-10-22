import { cn } from "@/utils";
import React from "react";

export type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  err?: string | null;
};

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ err, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          className={cn(
            "flex items-center justify-between text-sm font-bold text-blue-950",
            err && "text-red-500",
          )}
          htmlFor={props.id}
        >
          <span>{props.title}</span>
          {err && <span className="text-red-500">{err}</span>}
        </label>
        <input
          type="text"
          className={cn(
            "w-full rounded-md border border-gray-500 p-3 text-sm outline-none placeholder:font-semibold",
            err && "border-red-500",
          )}
          ref={ref}
          id={props.id}
          {...props}
        />
      </div>
    );
  },
);
CustomInput.displayName = "CustomInput";
export default CustomInput;
