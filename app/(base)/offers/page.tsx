import OfferList from "@/components/lists/offers-list";
import getCurrentUser from "@/lib/actions/get-current-user";
import React from "react";

const placeholder_data = [
  {
    name: "Santa Teresa 1796",
    price: 12,
    offer: 15,
  },
  {
    name: "Cacique",
    price: 11,
    offer: 8,
  },
  {
    name: "Superior",
    price: 9,
    offer: 7,
  },
  {
    name: "Cinco Estrellas",
    price: 8,
    offer: 4,
  },
  {
    name: "Pampero Blanco",
    price: 18,
    offer: 9,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 11,
    offer: 5,
  },
];

const fetchData = async () => {
  return placeholder_data;
};

const Page = async () => {
  const products = await fetchData();
  const user = await getCurrentUser();

  return <OfferList data={products} user={user} />;
};

export default Page;
