import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ClientLogos from "@/components/client-logos"
import ClientReviews from "@/components/client-reviews"
import OurTeam from "@/components/our-team"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import Products from "@/components/products"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientLogos />
        <ClientReviews />
        <OurTeam />
        <Products />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
