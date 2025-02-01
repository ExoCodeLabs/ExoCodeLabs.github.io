import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="mb-10 md:mb-0 md:mr-10 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
            <span className="text-orange-500">AI-Powered</span> Software
            Solutions for the Future
          </h1>
          <p className="text-xl mb-8">
            Exo CodeLabs delivers cutting-edge AI and software development
            services to propel your business into the future.
          </p>
          <Link href="#services">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="">
          <Image
            src="images/logo.png?height=400&width=400"
            alt="AI-powered software"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
