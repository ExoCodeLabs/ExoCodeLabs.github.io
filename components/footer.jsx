import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Exo CodeLabs
            </h3>
            <p className="text-gray-400">
              Empowering businesses with AI-driven software solutions for a
              brighter future.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ExoCodeLabs"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/exocode-labs/about"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/exocode_labs"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Exo CodeLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
