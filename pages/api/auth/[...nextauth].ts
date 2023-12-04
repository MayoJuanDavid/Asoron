import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Role, User } from "@/lib/types";
import axios from "axios";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales inválidas");
        }

        // const user = await axios.get("API_TO_CALL"); // TODO: Call API to get user and login

        const user: User = {
          id: "1",
          name: "Juan davi",
          email: "juandavi@gmial.com",
          emailVerified: undefined,
          hashedPassword: "hashedPassword",
          role: Role.Admin,
          birthDate: new Date(),
          image: "",
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
