"use client";
import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiBox,
  FiSettings,
  FiLogOut,
  FiArrowLeft,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import SidebarTab from "@/components/side-bar-tab";
import { signOut } from "next-auth/react";

const tabIcons = {
  dashboard: {
    icon: <FiHome size={25} />,
    text: "Inicio",
    route: "/admin",
  },
  users: {
    icon: <FiUsers size={25} />,
    text: "Usuarios",
    route: "/admin/users",
  },
  payment: {
    icon: <FiDollarSign size={25} />,
    text: "Detalles de pago",
    route: "/admin/payment",
  },
  products: {
    icon: <FiBox size={25} />,
    text: "Productos",
    route: "/admin/products",
  },
  settings: {
    icon: <FiSettings size={25} />,
    text: "Ajustes",
    route: "/admin/settings",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(route);
  };

  const handleSignOut = () => {
    signOut();
    redirect("/");
  };

  return (
    <div className="flex min-h-screen bg-white w-full">
      {/* Sidebar */}
      <nav className="w-1/5 bg-[#F2EAE1] text-white flex justify-between flex-col pt-3">
        <div
          className="flex items-center text-xl font-bold text-black justify-center gap-5 cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          <div className="h-full bg-[#F8D442] my-2 w-1"></div>
          <h1>Asoron Ucab - Admin</h1>
        </div>
        <div className="flex items-center flex-col mt-32">
          {/* User Icon */}
          <div className="mr-2 text-black">
            <FiUsers size={130} />
          </div>
          <p className="text-4xl text-[#F8D442] font-bold">Admin</p>
        </div>
        <div className="mt-20 flex flex-col mx-auto">
          {/* Tab Manager */}
          <div className="flex flex-col gap-6 text-black">
            {Object.entries(tabIcons).map(([key, value]) => {
              const isActive = pathname == value.route;
              return (
                <div
                  className="flex flex-col"
                  onClick={() => handleRedirect(value.route)}
                  key={key}
                >
                  <SidebarTab
                    icon={value.icon}
                    text={value.text}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-auto mx-auto">
          {/* Logout */}
          <div
            className="flex items-center cursor-pointer gap-4 text-black pb-4"
            onClick={() => handleSignOut()}
          >
            <p className="text-2xl">Logout</p>
            <FiLogOut size={20} />
          </div>
        </div>
      </nav>
      <main className="w-4/5 min-h-screen ">
        <header className="flex items-center justify-between mb-6 pt-6 pr-4 pl-4">
          <div className="flex items-center">
            {/* Back Arrow Icon */}
            <FiArrowLeft size={20} className="cursor-pointer" />
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="border rounded-md px-2 py-1 mr-4"
            />
            {/* Notifications Icon */}
            <FiBell size={20} className="cursor-pointer text-zinc-400" />
          </div>
        </header>
        <div className="bg-[#f8f8f8] h-[885px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
