import Image from "next/image"

const reviews = [
  {
    name: "Shrunjal Mehta",
    company: "Konzept Solutions",
    role: "Head of Sales & CEO",
    image: "images/clients/Konzept_solutions.png?height=80&width=80",
    review:
      "Working with Rishi Patel has been an absolute pleasure. His expertise in the MERN stack is truly impressive. Not only did he deliver exceptional results, but his professionalism and communication throughout the project were outstanding. Rishi's ability to understand our requirements and translate them into a functional and aesthetically pleasing web application exceeded our expectations.",
  },
  {
    name: "Haresh Vavadiya",
    role: "Founder and CEO",
    company: "Dignizant Technologies LLP",
    image: "images/clients/Dignizant_Technologies.png?height=80&width=80",
    review:
      "Rishi has excelled in their role, contributing significantly to our projects and team. He showcased excellent skills in React, Node, Mongo, and JavaScript and consistently delivered high-quality work on time. His positive attitude and collaborative nature made him a valued team member.",
  },
  {
    name: "Jean-Pierre Eskander",
    role: "Founder and CEO",
    company: "Sifio Health",
    image: "images/clients/sifio_health.png?height=80&width=80",
    review:
      "I had the pleasure of working with Rishi as he led the development of a standalone module within our broader healthcare solution. From the outset, Rishi demonstrated exceptional ownership—taking full end-to-end responsibility for the project, from architecture through to final release. He consistently brought clarity and transparency, flagging challenges early and providing thoughtful options to address them. His flexibility to learn new technologies and adapt to our evolving needs made him an invaluable asset to our team. Just as important, Rishi approached the work with patience and professionalism, ensuring the final release not only met but exceeded our expectations.I highly recommend Rishi to any team looking to add reliable, skilled, and collaborative technical expertise. He will elevate the quality and execution of any product he supports.",
  },
]

export default function ClientReviews() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          What Our Clients Say
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-${reviews.length} lg:grid-cols-${reviews.length} gap-8`}
        >
          {reviews.map((review, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-orange-500">{review.role}</p>
                  <p className="text-orange-500">{review.company}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">
                &ldquo;{review.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
