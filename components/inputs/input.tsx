"use client";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
}

const Input = ({
  id,
  type = "text",
  disabled,
  register,
  required,
  errors,
  placeholder,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`
        w-full px-4 py-2 border-2 border-[#fbd980] bg-transparent text-[#d9d6ff] placeholder:text-[#d9d6ff] text-lg rounded-xl
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
    </div>
  );
};

export default Input;
