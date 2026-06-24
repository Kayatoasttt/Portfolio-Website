"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6">
      {/* Brand Logo */}
      <div className="font-semibold text-lg tracking-wide cursor-pointer hover:text-white transition-colors">
        <a href="#hero">LOGO</a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 list-none m-0 p-0">
        {["About", "Resume", "Projects", "Certificates", "Contact"].map((item) => {
          const targetId = item.toLowerCase();
          return (
            <li
              key={item}
              className="text-sm tracking-widest uppercase cursor-pointer hover:text-white transition-colors duration-200"
            >
              <a href={`#${targetId}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Placeholder to maintain perfect absolute centering for desktop */}
      <div className="hidden md:block w-[50px] invisible" aria-hidden="true" />
    </nav>
  );
}