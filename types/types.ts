import React from "react";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface ContainerProps {
  children: React.ReactNode;
}

export interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface RegisterModalStoreType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface HeadingTypes {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export interface InputTypes {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
