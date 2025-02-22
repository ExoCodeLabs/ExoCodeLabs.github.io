import Image from "next/image"

const team = [
  {
    name: "Rishi Patel",
    role: "CEO, AI Research Lead & Developer",
    image: "images/team/Rishi_FullstackDeveloper.jpg",
  }
]

export default function OurTeam() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Our Team
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-${team.length} lg:grid-cols-${team.length} gap-8`}
        >
          {team.map((member, index) => (
            <div key={index} className="text-center ">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-lg mb-4 mx-auto text-white h-100 w-100"
              />
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-orange-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
