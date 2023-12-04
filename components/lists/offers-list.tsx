"use client";
import { useState } from "react";
import Product from "@/components/cards/product";
import SearchBar from "../search-bar";
import Message from "../cards/message";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/lib/types";

interface OfferListProps {
  data: {
    name: string;
    price: number;
  }[];
  user: SafeUser | null;
}

const OfferList = ({ data, user }: OfferListProps) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const addToCart = (item: { name: string; price: number }) => {
    if (!user) {
      toast.error("Debes iniciar sesión para agregar productos al carrito");
      router.push("/login");
      return;
    }
    //TODO: Add item to cart in backend and also update the cart in the frontend
    toast.success(`Agregaste ${item.name} al carrito`);
  };

  const renderData = () => {
    if (filteredData.length === 0) {
      return (
        <div className="flex items-center justify-center">
          <Message message="No se encontraron resultados" />;
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredData.map((item, index) => (
          <Product
            key={index}
            item={item}
            action={() => addToCart(item)}
            isOffer
            actionLabel="Agregar"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex gap-5 flex-col pr-20 pl-20">
      <SearchBar onSearch={handleSearch} />
      {searchValue ? null : <Message message="Promociones" />}
      {renderData()}
    </div>
  );
};

export default OfferList;
