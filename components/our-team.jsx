import Image from "next/image"

const team = [
  {
    name: "Dr. Alexis Quantum",
    role: "AI Research Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Zoe Nexus",
    role: "Senior Software Architect",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ethan Cipher",
    role: "Blockchain Specialist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Luna Cortex",
    role: "UX/UI Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function OurTeam() {
  return (
    (<section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-lg mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

