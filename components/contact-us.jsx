"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_l2ondi1", // Replace 'service_l2ondi1' with your actual service ID
        "template_hv5oojq", // Replace 'template_hv5oojq' with your actual template ID
        e.target,
        "gu-wmeyRGBxPrhGSL" // Replace 'your_user_id' with your actual EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!")
          alert("Email successfully sent!")
        },
        (error) => {
          console.log("Failed to send email:", error)
          alert("Failed to send email.")
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="fullname"
                placeholder="Name"
                className="bg-black border-orange-500"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-black border-orange-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-black border-orange-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Message"
              className="bg-black border-orange-500"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
