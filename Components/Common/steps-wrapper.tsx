import { useRef, useState } from "react";
import { DataType, InnerComponentRef, StepsType } from "@/types";

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
    <div className="flex flex-auto flex-col p-6 pb-6 md:p-12 md:pb-0 lg:w-[550px]">
      {activeStep.indexNo + 1 <= stepCount && (
        <>
          <h1 className="text-3xl font-bold text-blue-950">
            {activeStep.infoTitle}
          </h1>
          <p className="mt-4 text-gray-500">{activeStep.infoDescription}</p>
        </>
      )}

      <div className="mt-4 flex-auto">
        {ActiveComponent && (
          <ActiveComponent setData={setData} data={data} ref={ref} />
        )}
      </div>
      {activeStep.indexNo !== stepCount && (
        <div className="mt-4 flex w-full items-center justify-between md:mt-auto">
          {activeStep.indexNo > 0 && (
            <span
              className="cursor-pointer font-semibold text-gray-500 hover:underline"
              onClick={() => setActiveStepIndex((prev: number) => prev - 1)}
            >
              Go Back
            </span>
          )}
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
      )}
    </div>
  );
}
