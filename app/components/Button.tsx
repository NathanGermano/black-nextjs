import Link from "next/link";
import { UrlObject } from "url";

type ButtonProps = {
  address: string | UrlObject;
};

const Button = ({ address }: ButtonProps) => {
  return (
    <Link
      href={address}
      className="w-full max-w-70 p-3 bg-black text-white text-center font-medium rounded-md hover:bg-zinc-800 transition-colors"
    >
      Comprar
    </Link>
  );
};

export default Button;
