import React, { ChangeEvent, useImperativeHandle } from "react";
import { useState } from "react";

import { cn } from "@/utils";
import { addonsData } from "@/data";
import {
  AddOnsType,
  DataType,
  DateType,
  InfoFormProps,
  InnerComponentRef,
} from "@/types";

const AddOns = React.forwardRef<InnerComponentRef, InfoFormProps>(
  ({ setData, data }, ref) => {
    useImperativeHandle(ref, () => ({
      test: async () => {
        return true;
      },
    }));
    return (
      <div className="flex w-full flex-col gap-4">
        {addonsData.map((item, index) => {
          return (
            <SimpleAddOns
              key={index}
              item={item}
              dateType={data["step-2"]?.date}
              setData={setData}
              selected={
                data?.["step-3"]?.find(
                  (a: AddOnsType) => a.title == item.title,
                ) || false
              }
            />
          );
        })}
      </div>
    );
  },
);
AddOns.displayName = "AddOns";
export default AddOns;

function SimpleAddOns({
  item,
  dateType,
  setData,
  selected,
}: {
  item: AddOnsType;
  dateType: DateType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
  selected: boolean;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(selected);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
    setData((prev: DataType) => {
      if (e.target.checked) {
        const elem = { ...item, selectedPrice: item.price[dateType] };
        return { ...prev, "step-3": [...prev["step-3"], elem] };
      } else {
        const arr = [...prev["step-3"]];
        arr.splice(
          arr.findIndex((a) => a.title == item.title),
          1,
        );
        return { ...prev, "step-3": arr };
      }
    });
  }

  return (
    <label
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-500 p-4",
        isChecked && "border-blue-950 bg-blue-100",
      )}
    >
      <div className="flex items-center gap-4">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold text-blue-950">{item.title}</h3>
          <p className="text-xs text-gray-500 md:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>
      <span
        className={cn("text-xs text-gray-500", isChecked && "text-blue-950")}
      >
        ${item.price[dateType]}/{dateType}
      </span>
    </label>
  );
}
