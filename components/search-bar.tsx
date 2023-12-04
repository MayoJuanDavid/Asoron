"use client";
import React from "react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { register, setValue } = useForm();

  return (
    <div className="bg-[#00000080] rounded-xl absolute top-16 left-52">
      <Input
        className="rounded-xl border-[#fcd980] border-2 p-6 text-xl text-[#d9d6ffb2] w-[700px]"
        placeholder="Buscar producto, marca y mas ..."
        {...register("search")}
        onChange={(e) => {
          const searchValue = e.target.value;
          setValue("search", searchValue);
          onSearch(searchValue); // Call the provided search function
        }}
      />
    </div>
  );
};

export default SearchBar;
