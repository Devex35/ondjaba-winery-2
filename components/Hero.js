import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/ondjaba-wine.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-wide leading-tight mb-4">
            Fine Wines from Ondjaba
          </h1>
          <Link href="/collections"
             className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg uppercase tracking-wider transition duration-300 hover:bg-gray-200 hover:text-gray-800">
              Our Collections
            
          </Link>
        </div>
      </div>
      <nav className="absolute top-0 right-0 p-4 md:p-8 flex items-center justify-end z-20">
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M21 6H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
            />
          </svg>
        </button>
        <ul className="hidden md:flex items-center text-white font-semibold">
          <li className="ml-4">
            <Link href="/"
               className="hover:text-gray-300">Home
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/about"
               className="hover:text-gray-300">About Us
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/collections"
               className="hover:text-gray-300">Our Collections
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/restaurant"
               className="hover:text-gray-300">Jewels Restaurant
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/tasting"
               className="hover:text-gray-300">Tasting
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/contact"
               className="hover:text-gray-300">Contact Us
            </Link>
          </li>
        </ul>
      </nav>ent
    </div>
  );
};

export default Hero;
