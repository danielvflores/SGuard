import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            SGuard
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Dashboard
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Docs
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Add to Discord
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
