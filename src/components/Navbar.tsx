export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="text-4xl pl-2 font-bold text-blue-600">Trego</div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Discover
            </a>
            <a href="#" className="hover:text-blue-600">
              Experience
            </a>
            <a href="#" className="hover:text-blue-600">
              Destination
            </a>
            <a href="#" className="hover:text-blue-600">
              Information
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Currency */}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600">
              🇺🇸 USD
            </button>

            {/* My Booking */}
            <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
              My Booking
            </button>

            {/* Avatar */}
            <div className="h-8 w-8 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}


