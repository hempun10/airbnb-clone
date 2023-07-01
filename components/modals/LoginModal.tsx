"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import React, { useState, useCallback } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginModal, useRegisterModal } from "@/app/hooks";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const registerModel = useRegisterModal();
  const loginModel = useLoginModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Loged In");
        router.refresh();
        loginModel.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your Account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center font-light">
        <div className=" flex flex-row  items-center gap-2 justify-center">
          <div>Allready have an account?</div>
          <div
            onClick={registerModel.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
