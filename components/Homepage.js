import Head from 'next/head'
import Link from 'next/link'
import Erongo from './Erongo'

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Ondjaba - Fine Wines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-gray-800 hover:text-gray-600">
                  Ondjaba

              </Link>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
    
                </Link>
                <Link href="/about" 
className="text-gray-500 hover:text-gray-900">
                    About
    
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900">
                    Contact
    
                </Link>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-100 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Search</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 15.5l5.5 5.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
       
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-4xl font-extrabold text-gray-900">Fine Wines from Ondjaba</h1>
            <p className="mt-4 text-xl text-gray-500">Discover our selection of premium wines from around the world.</p>
            <div className="mt-6">
              <Link href="/shop" className="inline-block bg-gray-800 py-3 px-8 border border-transparent rounded-md font-semibold text-white hover:bg-gray-700">
                  Shop Now

              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home

              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/about"className="text-base text-gray-500 hover:text-gray-900">
                  About

              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact

              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Ondjaba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
export default HomePage