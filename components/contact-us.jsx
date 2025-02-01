import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
  return (
    (<section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Name" className="bg-black border-orange-500" />
              <Input type="email" placeholder="Email" className="bg-black border-orange-500" />
            </div>
            <Input type="text" placeholder="Subject" className="bg-black border-orange-500" />
            <Textarea placeholder="Message" className="bg-black border-orange-500" rows={6} />
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>)
  );
}

