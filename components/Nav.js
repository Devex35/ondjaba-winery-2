'use client'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-full">
      <ul className="flex justify-end items-center h-full">
        <li className="mx-3">
          <Link href="/"
             className="hover:text-gray-500">Home
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/about"
             className="hover:text-gray-500">About Us
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/collection"
             className="hover:text-gray-500">Our Collection
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/restaurant"
             className="hover:text-gray-500">Jewels Restaurant
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/tasting"
             className="hover:text-gray-500">Tasting
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/contact"
             className="hover:text-gray-500">Contact Us
          </Link>
        </li>
      </ul>
      <div className="cursor-pointer md:hidden">
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
          />
        </svg>
      </div>
    </nav>
  )
}

export default Nav
