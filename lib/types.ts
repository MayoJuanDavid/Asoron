export enum Role {
  Admin = "Admin",
  User = "cliente",
  Provider = "Proveedor",
}

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;
  role: Role;
  birthDate: Date;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "hashedPassword"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified?: string;
};

export type Payment = {
  user?: User;
  schedule: "Mensual" | "Quincenal" | "Semanal";
  billNumber: string;
  amount: number;
  balance: number;
  date: string;
};

export type Product = {
  id: number;
  name: string;
  degree: number;
  price: number;
  quantity: number;
  offer?: number;
};
