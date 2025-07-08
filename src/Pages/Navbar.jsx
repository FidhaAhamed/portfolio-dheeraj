import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-raleway flex items-center justify-between px-8 md:px-16 py-6 bg-[#121212] text-white relative">
      {/* Logo Image */}
      <div>
        <img src="/S.png" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 bg-[#1a1a1a] px-8 py-3 rounded-full text-sm tracking-wide uppercase text-white shadow-sm">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-gray-500 p-1 rounded-full hover:bg-[#121212] transition-colors"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-gray-500 p-1 rounded-full"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full right-6 mt-4 bg-[#1a1a1a] w-40 rounded-lg shadow-lg py-2 px-4 flex flex-col gap-2 text-sm uppercase md:hidden z-50">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Projects</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}
