"use client";
import { Payment, SafeUser } from "@/lib/types";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ProfileMenuProps {
  user: SafeUser;
}

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const handleSignOut = () => {
    signOut();
    return redirect("/");
  };

  const payments: Payment[] = [
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
    {
      amount: 100,
      schedule: "Semanal",
      balance: 100,
      billNumber: "123456789",
      date: "12/12/2021",
    },
  ];

  return (
    <div className="flex justify-center gap-4 mt-5">
      <div className="flex flex-col justify-center w-full items-center h-full">
        <div className="flex flex-col w-[800px] p-10 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80">
          <h1 className="text-4xl text-center font-semibold text-[#fbd980] mb-6">
            Información
          </h1>
          <div className="mb-4 justify-between flex gap-10">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Usuario
            </label>
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              {user?.email}
            </label>
          </div>
          <div className="mb-4 justify-between flex">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Telefono
            </label>
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              +58 424 123 4567
            </label>
          </div>
          <h1 className="text-2xl text-center font-semibold text-[#d9d6ff] mb-6">
            Personal de Contacto
          </h1>
          <div className="mb-4 justify-between flex">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Nombre
            </label>
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              {user?.name}
            </label>
          </div>
          <div className="mb-4 justify-between flex">
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              Telefono
            </label>
            <label className="block text-[#d9d6ff] text-xl font-semibold mb-2">
              +58 424 123 4567
            </label>
          </div>
          <h1 className="text-2xl text-center font-semibold text-[#d9d6ff] mb-6">
            Opciones
          </h1>
          {/* FIRST ROW OF BUTTONS */}
          <div className="flex justify-between gap-6">
            {/* CONDITIONAL IF IT IS ADMIN */}
            <button
              type="button"
              className="bg-transparent w-1/2 text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base"
            >
              Agregar Producto
            </button>
            <button
              type="button"
              className="bg-transparent w-1/2 text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base"
            >
              Editar información
            </button>
            <Link href="/change-password" className="w-1/2">
              <button
                type="button"
                className="bg-transparent w-full text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base"
              >
                Cambiar Contraseña
              </button>
            </Link>
          </div>
          {/* SECOND ROW OF BUTTONS */}
          <div className="flex justify-between gap-6">
            {/* CONDITIONAL IF IT IS ADMIN */}
            <button
              type="button"
              className="bg-transparent w-1/2 text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-black transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base"
            >
              Lista de Productos
            </button>
            <button
              type="button"
              className="bg-transparent w-1/2 text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-rose-600 hover:text-white transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base hover:border-rose-600"
            >
              Eliminar Cuenta
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="bg-transparent w-1/2 text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-rose-600 hover:text-white transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base hover:border-rose-600"
            >
              Cerrar Sesión
            </button>
          </div>
          <div className="flex justify-between gap-6">
            {/* CONDITIONAL IF IT IS ADMIN */}
            <Link href="/admin" className="w-full text-center">
              <p className="bg-transparent text-[#fbd980] p-2 border-2 border-[#fbd980] hover:bg-[#fbd980] hover:text-white transition duration-300 ease-in-out rounded-xl mt-4 mb-4 font-bold text-base ">
                Administrador
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center h-full">
        <div
          className="flex flex-col w-[800px] p-10 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80 max-h-[696px] overflow-y-scroll 
        "
        >
          <h1 className="text-4xl text-center font-semibold text-[#fbd980] mb-6">
            Pedidos Activos
          </h1>
          <div className="flex flex-col justify-center items-center w-full gap-10 mt-10">
            {payments.map((payment, index) => {
              // TODO: Change to other component
              return (
                <div className="text-white p-5 border-2 border-[#fbd980] rounded-xl bg-black bg-opacity-80 w-full">
                  <div className="flex justify-between gap-10">
                    <p className="text-[#d9d6ff] text-2xl">
                      Pedido {index + 1}
                    </p>
                    <p className="text-[#d9d6ff] text-2xl">
                      Monto: {payment.amount}$
                    </p>
                  </div>
                  <div className="flex justify-between gap-10">
                    <p className="text-[#d9d6ff] text-2xl">
                      Número de Factura: {payment.billNumber}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
