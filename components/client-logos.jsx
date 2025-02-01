import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 3", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=120" },
]

export default function ClientLogos() {
  return (
    (<section id="clients" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

