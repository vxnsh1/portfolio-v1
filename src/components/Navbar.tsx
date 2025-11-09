import { useState } from "react";
import TargetCursor from "./Cursor";
import { HiInboxArrowDown } from "react-icons/hi2";

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);

  const navLinks: string[] = ["Work", "Contact"];

  const handleNavClick = (item: string) => {
    const id = item.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full px-1 md:px-8 py-3">
      <TargetCursor spinDuration={0} hideDefaultCursor={true} />

      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <img
          src="/wenaria.jpg"
          alt="logo"
          className="w-10 md:w-14 rounded-xl hover:scale-90 transition-transform cursor-target p-1"
        />

        {/* Nav Links */}
        <ul className="flex items-center gap-3 md:gap-6">
          {navLinks.map((item, idx) => (
            <li
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => handleNavClick(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleNavClick(item);
              }}
              className="text-sm md:text-base font-medium cursor-pointer cursor-target hover:text-gray-300 transition-colors p-1"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
         <div className="text-center my-10">
      <button onClick={() => setShowResume(true)} className="bg-white text-black py-0.5 px-2 md:py-1 md:px-3 items-center rounded cursor-target flex gap-2 md:gap-2 font-medium text-sm md:text-base hover:bg-gray-200 transition">
          Resume
          <HiInboxArrowDown className="text-sm md:text-base" />
        </button>

      {showResume && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-3xl h-[90%] rounded-xl overflow-hidden relative shadow-xl">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              ✕
            </button>

            <iframe
              src="/Resume_Vansh_Chouhan.pdf"
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
      </div>
    </nav>
  );
};

export default Navbar;