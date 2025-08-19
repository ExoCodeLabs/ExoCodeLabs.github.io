import { Code, ReceiptIcon as Receipt, LayoutGrid } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: <Code className="w-12 h-12 text-orange-500" />,
    title: "Exo Snip - Code Snippets",
    description:
      "A collection of code snippets and demonstrations for various programming languages and frameworks.",
    link: "https://exocodelabs.github.io/exo-snip/",
    disabled: false,
  },
  {
    icon: <Receipt className="w-12 h-12 text-orange-500" />,
    title: "INVOXA – Invoice as service Platform",
    description:
      "A modular, scalable, and cloud-ready invoice-as-a-service platform. INVOXA enables authentication, client management, invoice generation, payments, notifications, and analytics with a clean microservices architecture.",
    link: "https://github.com/rishhi-patel/invoxa.git",
    disabled: false,
  },
  {
    icon: <LayoutGrid className="w-12 h-12 text-orange-500" />,
    title: "Exo CRM - CRM Dashboard",
    description:
      "A feature-rich CRM template designed for managing customers and business operations.",
    link: "https://exocodelabs.github.io/exo-crm/dashboard",
    disabled: false,
  },
  // {
  //   icon: <Resume className="w-12 h-12 text-orange-500" />,
  //   title: "Resume Craft AI",
  //   description: "Build your resume effortlessly with AI-powered assistance.",
  //   link: "https://exocodelabs.github.io/resume-craft-ai/",
  //   disabled: true,
  // },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-black p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow ${
                product.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {product.title}
              </h3>
              <p className="text-gray-400">{product.description}</p>
              {product.link && !product.disabled && (
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              )}
              {product.disabled && (
                <span className="text-gray-500 mt-2 inline-block">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
