"use client";
import axios from "axios";
import React, { useState, useCallback } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegisterModal } from "@/app/hooks";

const RegisterModal = () => {
  const registerModel = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModel.onClose();
      })
      .catch((errors) => {
        console.log(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return <div></div>;
};

export default RegisterModal;
