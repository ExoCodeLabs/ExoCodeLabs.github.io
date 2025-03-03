import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Exo CodeLabs
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#services"
            className="hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#clients"
            className="hover:text-orange-500 transition-colors"
          >
            Clients
          </Link>
          <Link
            href="#products"
            className="hover:text-orange-500 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-orange-500">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}
