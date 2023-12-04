import LoginForm from "@/components/forms/login-form";
import getCurrentUser from "@/lib/actions/get-current-user";

import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (user) {
    return redirect("/");
  }

  return <LoginForm />;
};

export default Page;
