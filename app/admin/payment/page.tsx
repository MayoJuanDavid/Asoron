"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Payment, Role, User } from "@/lib/types";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const payments_: Payment[] = [
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.Admin,
      id: "1",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.Admin,
      id: "2",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.Admin,
      id: "3",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.User,
      id: "4",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.Admin,
      id: "5",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.User,
      id: "6",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
  {
    user: {
      name: "Jhon Doe",
      email: "jon",
      role: Role.Admin,
      id: "7",
      birthDate: new Date("1999-01-01"),
    },
    schedule: "Mensual",
    billNumber: "1234",
    amount: 150,
    balance: 300,
    date: "2021-01-01",
  },
];

const fetchPayments = async () => {
  return payments_;
};

const Page = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const payments = await fetchPayments();
      setPayments(payments);
    };
    fetchData();
  }, []);

  const renderPayments = () => {
    if (payments.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center">
            No hay pagos registrados
          </TableCell>
        </TableRow>
      );
    }

    const handleEdit = (id?: string) => {
      if (!id) return;
      alert("EDITAR " + id.toString());
    };

    const handleDelete = (id?: string) => {
      if (!id) return;
      alert("ELIMINAR  " + id.toString());
    };

    return payments.map((payment) => {
      return (
        <TableRow key={payment?.user?.id}>
          <TableCell>{payment?.user?.name}</TableCell>
          <TableCell>{payment.schedule}</TableCell>
          <TableCell>{payment.billNumber}</TableCell>
          <TableCell>{payment.amount}</TableCell>
          <TableCell>{payment.balance}</TableCell>
          <TableCell>{payment.date}</TableCell>
          <TableCell colSpan={2}>
            <div className="flex gap-5">
              <Edit
                size={20}
                className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
                onClick={() => handleEdit(payment?.user?.id)}
              />
              <Trash2
                size={20}
                className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
                onClick={() => handleDelete(payment?.user?.id)}
              />
            </div>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <section className="flex flex-col mt-7 p-16">
      <div className="-mt-10 mb-5 border-b-2 pb-5 flex items-center">
        <h1 className="font-bold text-3xl">Detalles de pago</h1>
      </div>
      <div className="overflow-auto max-h-[750px] w-full">
        <Table>
          <TableHeader className="text-[#acacac]">
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo de Pago</TableHead>
              <TableHead>Número de Factura</TableHead>
              <TableHead>Total Pagado</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderPayments()}</TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Page;
