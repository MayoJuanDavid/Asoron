import Cart from "@/components/cards/cart";
import getCurrentUser from "@/lib/actions/get-current-user";
import { Product } from "@/lib/types";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/");
  }

  //TODO: Fetch user cart from backend

  const userCart: Product[] = [
    {
      id: 1,
      name: "Cacique",
      price: 11,
      quantity: 2,
      degree: 40,
    },
    {
      id: 2,
      name: "Superior",
      price: 9,
      quantity: 2,
      degree: 40,
    },
    {
      id: 3,
      name: "Cinco Estrellas",
      price: 8,
      quantity: 2,
      degree: 40,
    },
    {
      id: 4,
      name: "Pampero Blanco",
      price: 18,
      quantity: 2,
      degree: 40,
    },
    {
      id: 5,
      name: "Pampero Blanco",
      price: 18,
      quantity: 2,
      degree: 40,
    },
  ];

  return <Cart user={user} data={userCart} />;
};

export default Page;
