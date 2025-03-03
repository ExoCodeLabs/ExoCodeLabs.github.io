import Image from "next/image"

const founder = {
  name: "Rishi Patel",
  role: "Founder, AI Researcher, Fullstack Developer & Visionary",
  image: "images/team/Rishi_FullstackDeveloper.jpg",
}

export default function FounderVisionary() {
  return (
    <section id="founder" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Founder & Visionary
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src={founder.image || "/placeholder.svg"}
            alt={founder.name}
            width={300}
            height={300}
            className="rounded-lg mb-4 mx-auto text-white h-100 w-100"
          />
          <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
          <p className="text-orange-500">{founder.role}</p>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            At Exocode Labs, I’m on a mission to revolutionize AI-powered
            development, building cutting-edge tools that simplify workflows and
            enhance productivity.
          </p>
        </div>
      </div>
    </section>
  )
}
