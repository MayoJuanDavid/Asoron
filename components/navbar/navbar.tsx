import { User } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  currentUser: User | null;
  isAdmin: boolean;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="flex justify-between w-full items-start p-10 mb-2 bg-transparent z-10">
      <Link href="/">
        <img
          src="https://file.rendit.io/n/f5D5R72hg9rczs8ESp2s.png"
          alt="Finalremovebgpreview"
          id="Finalremovebgpreview"
        />
      </Link>
      <div className="flex flex-col mt-px items-start">
        <div className="flex w-full items-start">
          <div className="flex gap-28 w-full items-start mr-10">
            {currentUser ? (
              <Link href="/profile">
                <p className="text-center text-xl font-bold text-[#FCD980] mb-px">
                  Perfil
                </p>
              </Link>
            ) : (
              <Link href="/login">
                <p className="text-center text-xl font-bold text-[#FCD980] mb-px">
                  Iniciar Sesión
                </p>
              </Link>
            )}
            <Link href="/offers">
              <p className="text-center text-xl font-bold text-[#FCD980] mb-px">
                Ofertas
              </p>
            </Link>
            <Link href="/about-us">
              <p className="text-center text-xl font-bold text-[#FCD980] mb-px">
                Sobre nosotros
              </p>
            </Link>
            {currentUser ? (
              <Link href="/cart">
                <div className="text-[#fcd980] mb-1">
                  <ShoppingCart size={30} />
                </div>
              </Link>
            ) : null}
          </div>
        </div>
        <div
          id="Line"
          className="border-solid w-full h-1 border-t-2 border-b-0 border-[#FCD980]"
        />
      </div>
    </div>
  );
};

export default Navbar;
