import { useRef, useState } from "react";
import { DataType, InnerComponentRef, StepsType } from "@/types";
import { cn } from "@/utils";

export default function StepsWrapper({
  setActiveStepIndex,
  stepCount,
  activeStep,
}: {
  setActiveStepIndex: React.Dispatch<React.SetStateAction<number>>;
  stepCount: number;
  activeStep: StepsType;
}) {
  const ref = useRef<InnerComponentRef>(null);
  const ActiveComponent =
    activeStep.component as React.ForwardRefExoticComponent<any>;

  const [data, setData] = useState<DataType>({
    "step-1": {},
    "step-2": {},
    "step-3": [],
    "step-4": {},
  });

  return (
    <div className="flex flex-auto flex-col gap-4 p-6 pb-6 md:pb-0 lg:w-[550px] lg:p-12 lg:pb-0">
      <div
        className={cn(
          "hidden w-full flex-col gap-4",
          activeStep.indexNo + 1 <= stepCount && "flex",
        )}
      >
        <h1 className="text-3xl font-bold text-blue-950">
          {activeStep.infoTitle}
        </h1>
        <p className="text-gray-500">{activeStep.infoDescription}</p>
      </div>
      <div className="flex-1">
        <ActiveComponent setData={setData} data={data} ref={ref} />
      </div>
      <div
        className={cn(
          "mt-auto flex w-full items-center justify-between",
          activeStep.indexNo == stepCount && "hidden",
        )}
      >
        <span
          className={cn(
            "cursor-pointer font-semibold text-gray-500 hover:underline",
            activeStep.indexNo > 0 ? "block" : "hidden",
          )}
          onClick={() => setActiveStepIndex((prev: number) => prev - 1)}
        >
          Go Back
        </span>
        <button
          type="button"
          onClick={async () => {
            const result = await ref.current?.test();
            if (result) {
              setActiveStepIndex((prev: number) =>
                prev < stepCount ? prev + 1 : prev,
              );
            }
          }}
          className="ml-auto flex cursor-pointer items-center justify-center rounded-md bg-blue-950 px-6 py-3 font-semibold text-white"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
