import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-10 bg-black">
      <Link href="/" passHref>
        <a className="no-underline text-white">
          <img className="w-45" src="/logo.png" alt="logo" />
        </a>
      </Link>
      <div className="flex gap-10 font-medium">
        <Link href="/products" passHref>
          <a className="no-underline text-white">Produtcs</a>
        </Link>
        <Link href="/cart" passHref>
          <a className="no-underline text-white">Cart</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
