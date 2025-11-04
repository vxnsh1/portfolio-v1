const Navbar = () => {
    const navLinks: string[] = [
        "Work",
        "Projects",
        "Contact"
    ]

  return (
    <nav className="w-full h-16">
        <div className="w-full h-full flex justify-between items-center">
            <img src="/wenaria.jpg" alt="logo" className="w-12 rounded hover:scale-90"/>
            <ul className="h-full flex gap-5 items-center">
                {navLinks.map((item, idx) => (
                    <li key={idx} className="font-medium cursor-pointer hover:underline">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar 