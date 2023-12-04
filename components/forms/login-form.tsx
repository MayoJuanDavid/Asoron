"use client";
import Input from "@/components/inputs/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
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
      if (callback?.error) {
        toast.error("Usuario o contraseña incorrectos");
      } else {
        toast.success("Bienvenido a ASORONUCAB");
        router.push("/");
        router.refresh();
      }
    });
  };

  return (
    <div className="flex items-start justify-center mt-20">
      <div className="w-full flex flex-col max-w-md p-6 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80">
        <h1 className="text-3xl text-center font-semibold text-[#fbd980] mb-6">
          ASORONUCAB
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-[#fbd980] text-xl font-semibold mb-2">
              Usuario
            </label>
            <Input
              id="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              placeholder="Nombre de usuario"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#fbd980] text-xl font-semibold mb-2">
              Contraseña
            </label>
            <Input
              id="password"
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
            Iniciar Sesión
          </button>

          {/* Forgot Password Section */}
          <div className="mb-4">
            <Link href="/recover-password">
              <p className="text-[#d9d6ff] border-b-2 border-[#fbd980] pb-2 mb-2 text-center">
                <label className="cursor-pointer">
                  Olvidaste tu contraseña?
                </label>
              </p>
            </Link>
          </div>
          <Link href="/sign-up">
            <button
              type="button"
              className="w-full bg-transparent text-[#fbd980] py-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-xl"
            >
              Crear cuenta nueva
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
