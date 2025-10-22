import React, { useEffect, useImperativeHandle, useState } from "react";

import Image from "next/image";
import { cn } from "@/utils";
import CustomSwitch from "../UI/custom-switch";
import {
  InfoFormProps,
  InnerComponentRef,
  PriceType,
  SimpleItemTypes,
} from "@/types";
import { planTypesData } from "@/data";

const SelectPlan = React.forwardRef<InnerComponentRef, InfoFormProps>(
  ({ data, setData }, ref) => {
    const [selectedItem, setSelectedItem] = useState<SimpleItemTypes>(
      data?.["step-2"]?.plan || "Arcade",
    );
    const [selectedDate, setSelectedDate] = useState<PriceType>(
      data?.["step-2"]?.date || "monthly",
    );

    useImperativeHandle(
      ref,
      () => ({
        test: async () => {
          return true;
        },
      }),
      [],
    );

    useEffect(() => {
      setData((prev: any) => ({
        ...prev,
        "step-2": {
          plan: selectedItem,
          date: selectedDate,
          price: planTypesData[selectedItem].price[selectedDate],
        },
      }));
    }, [selectedItem, selectedDate, setData]);

    return (
      <div className="mt-4 flex w-full flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {(Object.keys(planTypesData) as SimpleItemTypes[]).map(
            (key: SimpleItemTypes) => {
              const item = planTypesData[key];
              return (
                <SimplePlan
                  key={key}
                  icon={item.icon}
                  price={item.price[selectedDate]}
                  priceType={selectedDate}
                  selected={selectedItem == key}
                  title={key}
                  setSelectedItem={setSelectedItem}
                />
              );
            },
          )}
        </div>
        <div className="flex items-center justify-center gap-4 rounded-lg bg-blue-100 p-4 text-xs text-gray-500">
          <span className={cn(selectedDate == "monthly" && "text-blue-950")}>
            Monthly
          </span>
          <CustomSwitch
            checked={selectedDate == "monthly" ? false : true}
            onChange={(e) => {
              setSelectedDate(e.target.checked ? "yearly" : "monthly");
            }}
          />
          <span className={cn(selectedDate == "yearly" && "text-blue-950")}>
            Yearly
          </span>
        </div>
      </div>
    );
  },
);
SelectPlan.displayName = "SelectPlan";
export default SelectPlan;

function SimplePlan({
  title,
  price,
  icon,
  priceType,
  selected,
  setSelectedItem,
}: {
  title: SimpleItemTypes;
  price: number;
  icon: any;
  priceType: "monthly" | "yearly";
  selected: boolean;
  setSelectedItem: React.Dispatch<React.SetStateAction<SimpleItemTypes>>;
}) {
  return (
    <div
      onClick={() => setSelectedItem(title)}
      className={cn(
        "flex w-full cursor-pointer gap-4 rounded-md border border-gray-500 p-4 md:min-h-[150px] md:flex-col",
        selected && "bg-blue-100",
      )}
    >
      <Image src={icon} width={40} height={40} alt={title} />
      <div className="mt-auto flex flex-col">
        <h4 className="text-lg font-semibold text-blue-950">{title}</h4>
        <span className="text-xs text-gray-500">
          ${price}/{priceType}
        </span>
      </div>
    </div>
  );
}
