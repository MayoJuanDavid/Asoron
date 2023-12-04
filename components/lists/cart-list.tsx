"use client";
import Product from "@/components/cards/product";
import Message from "../cards/message";
import { Product as ProductType, SafeUser } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ProductListProps {
  data: ProductType[];
  user: SafeUser | null;
  onUpdate: (items: ProductType[]) => void;
}

const CartList = ({ data, user, onUpdate }: ProductListProps) => {
  const [items, setItems] = useState(data);

  const SubtractOneUnit = (item: ProductType) => {
    // find the item in the cart
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
    );

    // if the item quantity is 0, remove it from the cart
    const filteredItems = updatedItems.filter((i) => i.quantity !== 0);

    // update the cart
    setItems(filteredItems);

    // call the onUpdate callback
    onUpdate(filteredItems);
  };

  const AddOneUnit = (item: ProductType) => {
    // find the item in the cart
    const itemInCart = items.find((i) => i.id === item.id);
    // if the item is not in the cart, return
    if (!itemInCart) return;
    // if the item is in the cart, add one unit
    itemInCart.quantity += 1;
    // update the cart
    setItems([...items]);
    // call the onUpdate callback
    onUpdate(items);
  };

  const renderData = () => {
    if (items.length === 0) {
      return (
        <div className="flex items-center justify-center">
          <Message message="No tienes items en el carrito" />;
        </div>
      );
    }
    return (
      <ScrollArea className="h-[163.19px]">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {items.map((item, index) => (
            <Product
              key={index}
              item={item}
              action={() => AddOneUnit(item)}
              secondaryAction={() => SubtractOneUnit(item)}
              actionLabel="+"
              secondaryActionLabel="-"
            />
          ))}
        </div>
      </ScrollArea>
    );
  };

  return <div className="flex gap-5 flex-col pr-20 pl-20">{renderData()}</div>;
};

export default CartList;
