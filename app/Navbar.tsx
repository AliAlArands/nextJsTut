import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  space-x-3 bg-slate-100 p-2">
      <Link href="/">NextJs</Link>
      <Link href="/users">users</Link>
    </nav>
  );
};

export default Navbar;
