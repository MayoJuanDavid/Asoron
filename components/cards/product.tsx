"use client";
import Image from "next/image";
import st1796 from "../../public/images/ST1796.png";

interface ProductProps {
  item: {
    name: string;
    price: number;
    offer?: number;
    quantity?: number;
  };
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  actionLabel: string;
  isOffer?: boolean;
  secondaryAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryActionLabel?: string;
  counter?: number;
}

const Product = ({
  item,
  action,
  isOffer,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}: ProductProps) => {
  return (
    <div className="p-4 rounded-xl flex max-w-6xl justify-between border-2 border-solid border-[#fcd980] bg-[#00000080] min-w-[215px]">
      <Image
        src={st1796}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <div className="flex flex-col items-end justify-between">
        <p className="text-xl font-bold text-[#d9d6ff]">{item.name}</p>
        {isOffer && (
          <div className="relative -mt-2">
            <span className="relative top-4 border-t-4 border-rose-500 block"></span>
            <p className="text-lg font-bold text-[#d9d6ff]">{`$${item?.offer?.toFixed(
              2
            )}`}</p>
          </div>
        )}
        <p className="text-lg font-bold text-[#d9d6ff]">{`$${item.price.toFixed(
          2
        )}`}</p>
        <div className="flex gap-5 items-center">
          {secondaryAction && (
            <>
              <button
                type="button"
                onClick={(e) => secondaryAction(e)}
                className="border-[#fcd980] rounded-xl border-2 text-[#d9d6ff] p-2 text-xl font-bold w-[36px]"
              >
                {secondaryActionLabel}
              </button>
              <p className="text-[#d9d6ff] text-xl border-[#fcd980] rounded-xl border-2 p-2">
                {item?.quantity}
              </p>
            </>
          )}

          <button
            type="button"
            onClick={(e) => action(e)}
            className={`border-[#fcd980] rounded-xl border-2 text-[#d9d6ff] p-2 ${
              secondaryActionLabel
                ? "font-bold text-xl w-[36px]"
                : "p-2 text-sm"
            }`}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
