"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254768610735" // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your web development and graphic design services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Connect with me</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Get in touch</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below or direct chat on Whatsapp.
          </p>
        </div>

        {/* Contact Form - Centered and Simple */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Enter your name"
                  className="border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-gray-800 dark:text-white h-12 rounded-lg shadow-none"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-gray-800 dark:text-white h-12 rounded-lg shadow-none"
                />
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Enter your message"
                rows={8}
                className="border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-gray-800 dark:text-white resize-none rounded-lg shadow-none"
              />
            </div>

            <div className="text-center space-y-4">
              <Button
                type="submit"
                className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-full px-8"
                size="lg"
              >
                Submit now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* WhatsApp Option */}
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">or</p>
                <Button
                  type="button"
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 dark:border-green-400 dark:text-green-400 rounded-full px-6 bg-transparent"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
