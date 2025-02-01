import Image from "next/image"

const reviews = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    image: "/placeholder.svg?height=80&width=80",
    review:
      "Exo CodeLabs delivered an exceptional AI solution that transformed our business processes. Their expertise and professionalism are unmatched.",
  },
  {
    name: "Jane Smith",
    company: "Future Systems LLC",
    image: "/placeholder.svg?height=80&width=80",
    review:
      "Working with Exo CodeLabs was a game-changer for our company. Their custom software development skills are truly world-class.",
  },
  {
    name: "Mike Johnson",
    company: "Quantum Dynamics",
    image: "/placeholder.svg?height=80&width=80",
    review:
      "The team at Exo CodeLabs went above and beyond our expectations. Their AI-powered solutions have given us a significant competitive edge.",
  },
]

export default function ClientReviews() {
  return (
    (<section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-orange-500">{review.company}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">&ldquo;{review.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

