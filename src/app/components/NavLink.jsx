import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#4B5563] dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 transition-colors duration-300 hover:text-[#007ACC] dark:hover:text-[#007ACC]"
    >
      {title}
    </Link>
  );
};

export default NavLink;