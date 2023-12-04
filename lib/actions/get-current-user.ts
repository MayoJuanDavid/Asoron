import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Role } from "../types";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = {
      id: "1",
      name: "Juan davi",
      email: "juandavi@gmial.com",
      emailVerified: undefined,
      hashedPassword: "hashedPassword",
      role: Role.Admin,
      birthDate: new Date(),
      image: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch {
    return null;
  }
};

export default getCurrentUser;
