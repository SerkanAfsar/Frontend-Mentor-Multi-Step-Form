import { StepItemType, StepsType } from "@/types";
import { cn } from "@/utils";

export default function StepInfo({
  steps,
  activeStepIndex,
}: {
  steps: StepsType[];
  activeStepIndex: number;
}) {
  const active = (indexNo: number) =>
    activeStepIndex == indexNo ||
    (indexNo == activeStepIndex - 1 && activeStepIndex == steps.length - 1);

  return (
    <div className="flex h-[172px] w-full shrink-0 grow-0 flex-row gap-8 bg-[url('../public/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat p-8 md:h-[568px] md:w-[274px] md:flex-col md:bg-[url('../public/images/bg-sidebar-desktop.svg')] md:bg-contain">
      {steps.map((item, index) => {
        return (
          <StepItem
            key={index}
            active={active(item.indexNo)}
            description={item.description}
            indexNo={item.indexNo}
            title={item.title}
            steps={steps}
          />
        );
      })}
    </div>
  );
}

function StepItem({
  active,
  description,
  indexNo,
  title,
  steps,
}: StepItemType & { steps: StepsType[] }) {
  if (indexNo == steps.length - 1) {
    return null;
  }
  return (
    <div className="flex w-full items-center justify-center gap-1 text-white md:gap-4">
      <div
        className={cn(
          "flex aspect-square w-10 shrink-0 grow-0 items-center justify-center rounded-full border border-white md:w-12",
          active && "bg-blue-200 text-black",
        )}
      >
        {indexNo + 1}
      </div>
      <div className="hidden flex-col uppercase md:flex">
        <span className="text-sm text-blue-100">{title}</span>
        <span className="font-bold">{description}</span>
      </div>
    </div>
  );
}
