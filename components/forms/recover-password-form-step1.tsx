"use client";
import Input from "@/components/inputs/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RecoverPasswordForm = () => {
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
    // TODO: Validate email to check if it is registered
    router.push("/recover-password/change-password");
  };

  return (
    <div className="flex items-start justify-center mt-20">
      <div className="w-full flex flex-col max-w-md p-6 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80">
        <h1 className="text-3xl text-center font-semibold text-[#fbd980] mb-6">
          Recuperar contraseña
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Correo
            </label>
            <Input
              id="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              placeholder="Correo Electrónico"
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/2 bg-transparent text-[#d9d6ff] py-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-xl"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPasswordForm;
