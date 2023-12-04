import ChangePasswordForm from "@/components/forms/change-password-form";
import getCurrentUser from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

export const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/");
  }

  return <ChangePasswordForm />;
};

export default Page;
