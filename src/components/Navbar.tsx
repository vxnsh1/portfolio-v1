import TargetCursor from "./Cursor"

const Navbar = () => {
    const navLinks: string[] = [
        "Work",
        "Projects",
        "Contact"
    ]

  return (
    <nav className="w-full h-full">
             <TargetCursor 

        spinDuration={2}

        hideDefaultCursor={true}

      />
        <div className="w-full h-full flex justify-between items-center">
            <img src="/wenaria.jpg" alt="logo" className="w-14 rounded-xl hover:scale-90 cursor-target p-1"/>
            <ul className="h-full flex gap-5 items-center">
                {navLinks.map((item, idx) => (
                    <li key={idx} className="font-medium cursor-pointer cursor-target p-1">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar 