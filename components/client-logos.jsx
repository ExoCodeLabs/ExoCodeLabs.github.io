import Image from "next/image"

const clients = [
  {
    name: "Dignizant Technologies",
    logo: "images/clients/Dignizant_Technologies.png?height=80&width=120",
  },
  {
    name: "Konzept Solutions",
    logo: "images/clients/Konzept_solutions.png?height=80&width=120",
  },
]

export default function ClientLogos() {
  return (
    <section id="clients" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Trusted by Industry Leaders
        </h2>
        <div
          className={`grid grid-cols-2 md:grid-cols-${clients.length} lg:grid-cols-${clients.length} gap-8`}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center ">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
