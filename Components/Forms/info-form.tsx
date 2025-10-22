import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../UI/custom-input";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import {
  InfoFormProps,
  InfoFormType,
  infoSchema,
  InnerComponentRef,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

const InfoForm = React.forwardRef<InnerComponentRef, InfoFormProps>(
  ({ setData, data, ...rest }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<InfoFormType>({
      mode: "onChange",
      resolver: zodResolver(infoSchema),
      defaultValues: {
        ...data["step-1"],
      },
    });
    const errRef = useRef(errors);

    const onSubmit: SubmitHandler<InfoFormType> = async (data) => {
      setData((prev: any) => ({ ...prev, "step-1": data }));
    };

    async function handleTrigger(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter") {
        await handleSubmit(onSubmit)();
      }
    }
    useImperativeHandle(ref, () => ({
      test: async () => {
        await handleSubmit(onSubmit)();
        return Object.keys(errRef.current).length == 0;
      },
    }));

    useEffect(() => {
      errRef.current = errors;
    }, [errors]);

    return (
      <form className="flex w-full flex-col gap-6" {...rest}>
        <CustomInput
          title="Name"
          {...register("name", {
            required: "Bu Alan Zorunlu",
          })}
          id="name"
          placeholder="e.g. Stephen King"
          onKeyDown={handleTrigger}
          err={errors.name?.message}
        />
        <CustomInput
          {...register("email", {
            required: "Bu Alan Zorunlu",
          })}
          onKeyDown={handleTrigger}
          title="Email Address"
          id="email"
          err={errors.email?.message}
          placeholder="e.g. stephenking@lorem.com"
        />
        <CustomInput
          err={errors.phone?.message}
          {...register("phone", {
            required: "Bu Alan Zorunlu",
          })}
          onKeyDown={handleTrigger}
          title="Phone Number"
          id="phonenumber"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    );
  },
);
InfoForm.displayName = "InfoForm2";
export default InfoForm;
