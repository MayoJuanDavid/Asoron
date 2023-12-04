import { FiUsers, FiDollarSign, FiBox } from "react-icons/fi";
import DashboardCard from "@/components/cards/dashboard-card";
import getCurrentUser from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";
import { Role } from "@/lib/types";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/");
  }

  if (user.role !== Role.Admin) {
    return redirect("/");
  }

  return (
    <section className="grid grid-cols-3 gap-8 p-10">
      {/* User Card */}
      <DashboardCard icon={<FiUsers size={40} />} title="Usuarios" value={10} />
      {/* Product Card */}
      <DashboardCard icon={<FiBox size={40} />} title="Productos" value={25} />
      {/* Payment Card */}
      <DashboardCard
        icon={<FiDollarSign size={40} />}
        title="Pagos"
        value={5}
      />
    </section>
  );
};

export default Page;
