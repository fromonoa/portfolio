'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-600 hover:text-gray-800"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="block px-3 py-2 text-gray-600 hover:text-gray-800"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}