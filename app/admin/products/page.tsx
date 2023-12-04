"use client";
import Actions from "@/components/cards/actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/lib/types";
import { Tooltip } from "@nextui-org/react";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const products: Product[] = [
  {
    id: 1,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 2,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 3,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 4,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 5,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 6,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
  {
    id: 7,
    name: "Ron Santa Teresa",
    degree: 40.0,
    price: 15,
    quantity: 100,
  },
];

const fetchUsers = async () => {
  return products || [];
};

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchUsers();
      setProducts(products);
    };
    fetchData();
  }, []);

  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center">
            No hay productos
          </TableCell>
        </TableRow>
      );
    }

    return products.map((product) => {
      return (
        <TableRow key={product.id}>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.degree}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.quantity}</TableCell>
          <TableCell colSpan={2}>
            <Actions
              action={() => handleEdit(product.id)}
              secondaryAction={() => handleDelete(product.id)}
              item={product}
            />
          </TableCell>
        </TableRow>
      );
    });
  };

  const handleEdit = (id: number) => {
    alert("EDITAR " + id.toString());
  };

  const handleDelete = (id: number) => {
    alert("ELIMINAR  " + id.toString());
  };

  return (
    <section className="flex flex-col mt-7 p-16">
      <div className="-mt-10 mb-5 border-b-2 pb-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Lista de productos</h1>
        <Button className="bg-amber-500 text-white font-semibold rounded-[10px] hover:bg-amber-300">
          Agregar Producto
        </Button>
      </div>
      <div className="overflow-auto max-h-[750px] w-full">
        <Table>
          <TableHeader className="text-[#acacac]">
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Grado de Alcohol (%)</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Cantidad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderProducts()}</TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Page;
