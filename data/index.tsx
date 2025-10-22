import AddOns from "@/Components/Forms/add-ons";
import InfoForm from "@/Components/Forms/info-form";
import SelectPlan from "@/Components/Forms/select-plan";
import {
  AddOnsType,
  SimpleItemDetails,
  SimpleItemTypes,
  StepsType,
} from "@/types";

import arcade from "../public/images/icon-arcade.svg";
import advanced from "../public/images/icon-advanced.svg";
import pro from "../public/images/icon-pro.svg";
import FinishForm from "@/Components/Forms/finish";
import ThankYou from "@/Components/Forms/thank-you";

export const stepsData = [
  {
    title: "Step 1",
    description: "Your Info",
    active: true,
    indexNo: 0,
    component: InfoForm,
    infoTitle: "Personal info",
    infoDescription:
      "Please provide your name, email address, and phone number.",
    stepKey: "step-1",
  },
  {
    title: "Step 2",
    description: "Select Plan",
    active: false,
    indexNo: 1,
    component: SelectPlan,
    infoTitle: "Select your plan",
    infoDescription: "You have the option of monthly or yearly billing.",
    stepKey: "step-2",
  },
  {
    title: "Step 3",
    description: "Add-Ons",
    active: false,
    indexNo: 2,
    infoTitle: "Pick add-ons",
    infoDescription: "Add-ons help enhance your gaming experience.",
    component: AddOns,
    stepKey: "step-3",
  },
  {
    title: "Step 4",
    description: "Summary",
    active: false,
    indexNo: 3,
    infoTitle: "Finishing up",
    infoDescription: "Double-check everything looks OK before confirming.",
    stepKey: "step-4",
    component: FinishForm,
  },
  {
    title: "Step 4",
    description: "Summary",
    active: false,
    indexNo: 4,
    infoTitle: "Finishing up",
    infoDescription: "Double-check everything looks OK before confirming.",
    stepKey: "step-4",
    component: ThankYou,
  },
] as const satisfies StepsType[];

export const addonsData: AddOnsType[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of Cloud Save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    title: "Customazible Profile",
    description: "Custom Theme On Your Profile",
    price: {
      monthly: 3,
      yearly: 30,
    },
  },
];

export const planTypesData: Record<SimpleItemTypes, SimpleItemDetails> = {
  Arcade: {
    price: {
      monthly: 9,
      yearly: 90,
    },
    icon: arcade,
  },
  Advanced: {
    price: {
      monthly: 12,
      yearly: 120,
    },
    icon: advanced,
  },
  Pro: {
    price: {
      monthly: 15,
      yearly: 150,
    },
    icon: pro,
  },
};
