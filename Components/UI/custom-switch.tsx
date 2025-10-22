import React, { ChangeEvent } from "react";

export type CustomSwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomSwitch2 = React.forwardRef<HTMLInputElement, CustomSwitchProps>(
  ({ onChange, ...rest }, ref) => {
    return (
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          ref={ref}
          onChange={onChange}
          type="checkbox"
          className="peer sr-only"
          {...rest}
        />
        <div className="peer h-5 w-[38px] rounded-full bg-[#002D62] after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[110%]"></div>
      </label>
    );
  },
);
CustomSwitch2.displayName = "CustomSwitch2";
export default CustomSwitch2;
