import { ReactNode } from "react";

interface SidebarTabProps {
  icon: ReactNode;
  text: string;
  isActive: boolean;
}

const SidebarTab = ({ icon, text, isActive }: SidebarTabProps) => {
  return (
    <div
      className={`rounded-xl p-4 flex items-center my-2 cursor-pointer gap-4 pl-6 pr-6 ${
        isActive ? "bg-amber-500" : "bg-[#f1e0cc]"
      }`}
    >
      {icon}
      <p className={`text-black text-xl ${isActive ? "font-bold" : ""}`}>
        {text}
      </p>
    </div>
  );
};

export default SidebarTab;
