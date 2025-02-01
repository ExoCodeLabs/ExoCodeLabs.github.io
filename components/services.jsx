import {
  Code,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  MessageSquare,
  LinkIcon,
  BotIcon as Robot,
} from "lucide-react"

const services = [
  {
    icon: <Cpu className="w-12 h-12 text-orange-500" />,
    title: "AI Development",
    description:
      "Cutting-edge artificial intelligence solutions tailored to your business needs, including custom AI agents.",
  },
  {
    icon: <Code className="w-12 h-12 text-orange-500" />,
    title: "Custom Software",
    description:
      "Bespoke software development to streamline your operations and boost productivity.",
  },
  {
    icon: <Globe className="w-12 h-12 text-orange-500" />,
    title: "Web Applications",
    description:
      "Responsive and scalable web applications built with the latest technologies.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-orange-500" />,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS Android devices.",
  },
  {
    icon: <Cloud className="w-12 h-12 text-orange-500" />,
    title: "Cloud Services",
    description:
      "Scalable and secure cloud solutions for storage, computing, deployment.",
  },
  {
    icon: <LinkIcon className="w-12 h-12 text-orange-500" />,
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs and development custom for your business.",
  },
  {
    icon: <Robot className="w-12 h-12 text-orange-500" />,
    title: "Custom AI Agents",
    description:
      "Develop tailored AI agents to automate tasks, enhance decision-making, and improve customer interactions.",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
    title: "Free Consultation",
    description:
      "Get expert advice on how AI and software solutions can benefit your business, at no cost.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
