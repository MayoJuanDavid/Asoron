import SignUpForm from "@/components/forms/sign-up-form";
import getCurrentUser from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (user) {
    return redirect("/");
  }

  return <SignUpForm />;
};
export default Page;
