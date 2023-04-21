import Nav from './Nav'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl font-bold text-gray-800">Fine Wines from Ondjaba</h1>
        <Link href="/collection"
           className="ml-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Our Collection
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header
