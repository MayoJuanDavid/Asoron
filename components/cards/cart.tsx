"use client";
import { Product, SafeUser } from "@/lib/types";
import CartList from "../lists/cart-list";
import DirectionCard from "./direction-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";

interface CartProps {
  user: SafeUser;
  data: Product[];
}

const PaymentMethods = [
  "Tarjeta de Crédito",
  "Tarjeta de Débito",
  "Efectivo",
  "Pago Móvil",
];

const Cart = ({ user, data }: CartProps) => {
  const [items, setItems] = useState(data);
  const [subtotal, setSubtotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    let iva = 0;
    let total = 0;
    items.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    iva = subtotal * 0.16;
    total = subtotal + iva;
    setSubtotal(subtotal);
    setIva(iva);
    setTotal(total);
  }, [items]);

  return (
    <div className="flex items-start justify-center mt-10">
      <div className="w-full flex flex-col max-w-screen border-2 p-6 mr-20 ml-20 border-[#fbd980] rounded-xl bg-black bg-opacity-80">
        <h1 className="text-3xl text-center font-semibold text-[#fbd980] mb-6">
          Carrito
        </h1>
        <div className="mb-4">
          <label className="block text-[#fbd980] text-3xl font-semibold mb-2">
            Ubicación de entrega
          </label>
        </div>
        <DirectionCard />
        <div className="mt-6">
          <CartList
            data={items}
            user={null}
            onUpdate={(items) => setItems(items)}
          />
        </div>
        <div className="mt-6 gap-4 flex flex-col items-center justify-between w-full xl:flex-row lg:flex-row md:flex-row">
          <div className="flex">
            <Select>
              <SelectTrigger className="w-[250px] text-[#d9d6ff] rounded-xl border-2 text-xl p-5 border-[#fbd980]">
                <SelectValue placeholder="Forma de Pago" />
              </SelectTrigger>
              <SelectContent className="rounded-xl text-[#fbd980]">
                <SelectGroup className="bg-black text-white rounded-xl">
                  <SelectLabel>Formas de Pago</SelectLabel>
                  {PaymentMethods.map((method, index) => (
                    <SelectItem
                      key={index}
                      className="bg-black text-[#d9d6ff] rounded-xl cursor-pointer hover:text-white"
                      value={method}
                    >
                      {method}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-16 w-full justify-between">
              <p className="text-[#d9d6ff] text-xl font-bold">Subtotal</p>
              <p className="text-[#d9d6ff] text-xl font-bold">
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-16 justify-between">
              <p className="text-[#d9d6ff] text-xl font-bold">IVA</p>
              <p className="text-[#d9d6ff] text-xl font-bold">
                ${iva.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-16 justify-between">
              <p className="text-[#d9d6ff] text-xl font-bold">Total</p>
              <p className="text-[#d9d6ff] text-xl font-bold">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
