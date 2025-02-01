import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    (<footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Exo CodeLabs</h3>
            <p className="text-gray-400">
              Empowering businesses with AI-driven software solutions for a brighter future.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-gray-400 hover:text-orange-500 transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-400 hover:text-orange-500 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Exo CodeLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}

