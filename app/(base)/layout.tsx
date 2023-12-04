import Navbar from "@/components/navbar/navbar";
import getCurrentUser from "@/lib/actions/get-current-user";
import { Role } from "@/lib/types";

const BaseLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar
        currentUser={currentUser}
        isAdmin={currentUser?.role === Role.Admin}
      />
      {children}
    </>
  );
};

export default BaseLayout;
