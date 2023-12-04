"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="flex items-start justify-center mt-20">
      <div className="w-full flex flex-col max-w-md p-6 border-2 border-[#d9d6ff] rounded-xl bg-black bg-opacity-80">
        <h1 className="text-3xl text-center font-semibold text-[#d9d6ff] mb-6">
          Registro
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Nombre
            </label>
            <Input
              className="w-full px-4 py-2 border-2 border-[#d9d6ff] bg-transparent text-[#d9d6ff] placeholder:text-[#d9d6ff] text-lg rounded-xl"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Usuario
            </label>
            <Input
              className="w-full px-4 py-2 border-2 border-[#d9d6ff] bg-transparent text-[#d9d6ff] placeholder:text-[#d9d6ff] text-lg rounded-xl"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Correo
            </label>
            <Input
              className="w-full px-4 py-2 border-2 border-[#d9d6ff] bg-transparent text-[#d9d6ff] placeholder:text-[#d9d6ff] text-lg rounded-xl"
              placeholder="Correo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Contraseña
            </label>
            <Input
              className="w-full px-4 py-2 border-2 border-[#d9d6ff] bg-transparent text-[#d9d6ff] placeholder:text-[#d9d6ff] text-lg rounded-xl"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-transparent text-[#fbd980] py-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-xl"
          >
            Registrarme
          </button>
          <div className="mb-4">
            <p className="border-b-2 border-[#d9d6ff] pb-2 mb-2"></p>
          </div>
          <label className="cursor-pointer text-[#d9d6ff] text-center">
            Ya tienes una cuenta?
            <Link href="/login">
              <span className="text-[#fbd980] ml-1 cursor-pointer hover:text-[#fbe3a5] hover:underline">
                {" "}
                Inicia sesión
              </span>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
