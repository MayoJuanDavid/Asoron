import ProfileMenu from "@/components/profile-menu";
import getCurrentUser from "@/lib/actions/get-current-user";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/");
  }

  return <ProfileMenu user={currentUser} />;
};

export default ProfilePage;
