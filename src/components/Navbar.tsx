import TargetCursor from "./Cursor";
import { HiInboxArrowDown } from "react-icons/hi2";

const Navbar = () => {
  const navLinks: string[] = ["Work", "Projects"];

  return (
    <nav className="w-full px-3 md:px-8 py-3">
      <TargetCursor spinDuration={0} hideDefaultCursor={true} />

      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <img
          src="/wenaria.jpg"
          alt="logo"
          className="w-8 md:w-14 rounded-xl hover:scale-90 transition-transform cursor-target p-1"
        />

        {/* Nav Links */}
        <ul className="flex items-center gap-3 md:gap-6">
          {navLinks.map((item, idx) => (
            <li
              key={idx}
              className="text-sm md:text-base font-medium cursor-pointer cursor-target hover:text-gray-300 transition-colors p-1"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button className="bg-white text-black py-0.5 px-2 md:py-1 md:px-3 items-center rounded cursor-target flex gap-2 md:gap-2 font-medium text-sm md:text-base hover:bg-gray-200 transition">
          Resume
          <HiInboxArrowDown className="text-sm md:text-base" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
