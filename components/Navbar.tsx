"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, UserCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/appointment", label: "Appointment" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          Dr. Ejaz Qamar
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-teal-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-gray-500 hover:text-teal-700 transition-colors"
            title="Admin Login"
          >
            <UserCircle size={22} />
          </Link>
        </div>

        {/* Mobile: Account icon + Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/admin"
            className="text-gray-500 hover:text-teal-700 transition-colors"
            title="Admin Login"
          >
            <UserCircle size={24} />
          </Link>
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
