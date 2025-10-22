import {
  AddOnsType,
  DateType,
  InfoFormProps,
  InnerComponentRef,
  SimpleItemTypes,
} from "@/types";
import { cn } from "@/utils";
import React from "react";
import { useImperativeHandle } from "react";

const FinishForm = React.forwardRef<InnerComponentRef, InfoFormProps>(
  ({ setData, data, ...rest }, ref) => {
    useImperativeHandle(ref, () => ({
      test: async () => {
        return true;
      },
    }));
    const planType = data["step-2"] as {
      plan: SimpleItemTypes;
      date: DateType;
      price: number;
    };
    const arr = Array.from(data["step-3"]) as AddOnsType[];

    const totalPrice = arr.reduce<number>((acc, next: AddOnsType) => {
      return acc + next.price[planType.date];
    }, planType.price);

    return (
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-col gap-4 rounded-md bg-blue-100 p-4">
          <div
            className={cn(
              "flex items-center justify-between text-blue-950",
              arr.length > 0 && "border-b border-gray-300 pb-6",
            )}
          >
            <h2 className="font-semibold">
              {planType.plan} ({planType.date})
            </h2>
            <span className="text-sm font-semibold">
              ${planType.price}/{planType.date}
            </span>
          </div>
          {arr.length > 0 && (
            <div className="flex w-full flex-col gap-4">
              {arr.map((item: AddOnsType, key: number) => (
                <div
                  key={key}
                  className="flex w-full items-center justify-between text-sm"
                >
                  <span className="text-gray-500">{item.title}</span>
                  <span className="text-blue-950">
                    +${item.price[planType.date]}/{planType.date}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex w-full items-center justify-between p-0 text-sm md:p-4">
          <span>Total (Per Month)</span>
          <span className="text-base font-bold text-blue-950 md:text-lg">
            +{totalPrice}$/{planType.date}
          </span>
        </div>
      </div>
    );
  },
);
FinishForm.displayName = "FinishForm";
export default FinishForm;
