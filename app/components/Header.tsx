import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-10 bg-black">
      <Link href="/" className="text-white">
        <img className="w-45" src="/logo.png" alt="logo" />
      </Link>
      <div className="flex gap-10 font-medium">
        <Link href="/products" className="text-white">
          Produtcs
        </Link>
        <Link href="/cart" className="text-white">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Header;
