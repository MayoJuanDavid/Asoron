"use client";
import Input from "@/components/inputs/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ChangePasswordForm = () => {
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
    //TODO: Change password in backend
    toast.success("Contraseña cambiada exitosamente");
    router.push("/profile");
  };

  return (
    <div className="flex items-start justify-center mt-20">
      <div className="w-full flex flex-col max-w-md p-6 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80">
        <h1 className="text-3xl text-center font-semibold text-[#fbd980] mb-6">
          Cambio de Contraseña
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-[#fbd980] text-xl font-semibold mb-2">
              Contraseña actual
            </label>
            <Input
              id="current-password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              placeholder="Contraseña"
              type="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#fbd980] text-xl font-semibold mb-2">
              Nueva Contraseña
            </label>
            <Input
              id="new-password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#fbd980] text-xl font-semibold mb-2">
              Confirmar Contraseña
            </label>
            <Input
              id="confirm-password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
              placeholder="Contraseña"
            />
          </div>
          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-transparent text-[#fbd980] py-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-xl"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            Aceptar
          </button>

          {/* Forgot Password Section */}
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
