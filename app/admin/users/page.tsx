"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Role, User } from "@/lib/types";
import { Tooltip } from "@nextui-org/react";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const users: User[] = [
  {
    id: "1",
    name: "Jose",
    email: "Jose@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "2",
    name: "Juan",
    email: "Juan@gmail.com",
    role: Role.User,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "3",
    name: "Daniel",
    email: "Daniel@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "1",
    name: "David",
    email: "David@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "1",
    name: "Jose",
    email: "Jose@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "1",
    name: "Jose",
    email: "Jose@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
  {
    id: "1",
    name: "Jose",
    email: "Jose@gmail.com",
    role: Role.Admin,
    birthDate: new Date("08-Dec,1998"),
  },
];

const fetchUsers = async () => {
  return users;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchUsers();
      setUsers(users);
    };

    fetchData();
  }, []);

  const renderUsers = () => {
    if (users.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center">
            No hay usuarios
          </TableCell>
        </TableRow>
      );
    }

    return users.map((user) => {
      return (
        <TableRow key={user.id}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.birthDate.toISOString()}</TableCell>
          <TableCell colSpan={2}>
            <div className="flex gap-5">
              <Tooltip
                content="Editar"
                className="bg-[#646464] text-white p-2 rounded-[4px] text-sm"
              >
                <Edit
                  size={20}
                  className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
                  onClick={() => handleEdit(user.id)}
                />
              </Tooltip>
              <Tooltip
                content="Eliminar"
                className="bg-[#646464] text-white p-2 rounded-[4px] text-sm"
              >
                <Trash2
                  size={20}
                  className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
                  onClick={() => handleDelete(user.id)}
                />
              </Tooltip>
            </div>
          </TableCell>
        </TableRow>
      );
    });
  };

  const handleEdit = (id: string) => {
    alert("EDITAR " + id.toString());
  };

  const handleDelete = (id: string) => {
    alert("ELIMINAR  " + id.toString());
  };

  return (
    <section className="flex flex-col p-16">
      <div className="-mt-10 mb-5 border-b-2 pb-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Lista de usuarios</h1>
        <Button className="bg-amber-500 text-white font-semibold rounded-[10px] hover:bg-amber-300">
          Agregar Usuario
        </Button>
      </div>
      <div className="overflow-auto max-h-[750px] w-full">
        <Table>
          <TableHeader className="text-[#acacac]">
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Correo Electrónico</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Fecha de Nacimiento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderUsers()}</TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Page;
