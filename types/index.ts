import { stepsData } from "@/data";
import { z } from "zod";

export type StepItemType = {
  indexNo: number;
  title: string;
  description: string;
  active: boolean;
};

export type StepsType = StepItemType & {
  component?: React.ForwardRefExoticComponent<any> | React.ComponentType;
  infoTitle: string;
  infoDescription: string;
  stepKey: string;
};

export type StepTitleType = (typeof stepsData)[number]["stepKey"];

export type DataType = Record<StepTitleType, any>;

export type AddOnsType = {
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

export type DateType = keyof AddOnsType["price"];

export const infoSchema = z.object({
  email: z
    .email({ error: "Email Format Error" })
    .min(1, { error: "EMail Required" }),
  phone: z
    .string()
    .min(1, { error: "This field is required" })
    .regex(/^\+1\s\d{3}\s\d{3}\s\d{3}$/, {
      error: "Phone Format Error",
    }),
  name: z.string().min(1, { error: "This field is required" }),
});

export type InfoFormType = z.infer<typeof infoSchema>;

export type InnerComponentRef = {
  test: () => Promise<boolean>;
};

export type InfoFormProps = {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
};

export type SimpleItemTypes = "Arcade" | "Advanced" | "Pro";

export type SimpleItemDetails = {
  price: {
    monthly: number;
    yearly: number;
  };
  icon: any;
};

export type PriceType = keyof SimpleItemDetails["price"];
