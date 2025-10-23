"use client";
import StepInfo from "@/Components/Common/step-info";
import StepsWrapper from "@/Components/Common/steps-wrapper";
import { stepsData } from "@/data";
import { useState } from "react";

export default function Home() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const ActiveStep = stepsData[activeStepIndex];

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-md bg-white shadow md:h-auto md:flex-row md:items-stretch md:p-4">
      <StepInfo steps={stepsData} activeStepIndex={activeStepIndex} />
      <StepsWrapper
        setActiveStepIndex={setActiveStepIndex}
        stepCount={stepsData.length - 1}
        activeStep={ActiveStep}
      ></StepsWrapper>
    </section>
  );
}
