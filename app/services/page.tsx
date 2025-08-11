import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Palette, Monitor, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web design",
      description:
        "Web development is the process of building, programming, and maintaining websites and web applications.",
      color: "bg-pink-100 text-pink-600",
      iconBg: "bg-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile app",
      description: "Mobile app development involves creating software for mobile devices.",
      color: "bg-red-100 text-red-600",
      iconBg: "bg-red-500",
    },
    {
      icon: Monitor,
      title: "UI/UX design",
      description: "UI/UX design focuses on creating a seamless user experience.",
      color: "bg-purple-100 text-purple-600",
      iconBg: "bg-purple-500",
    },
    {
      icon: Palette,
      title: "Graphics design",
      description: "Creative design solutions to enhance visual communication.",
      color: "bg-pink-100 text-pink-600",
      iconBg: "bg-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">What I offer</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">My Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am a Java fullstack web developer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 p-0 h-auto font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Web Creation, Hosting, Maintenance</h3>
              <p className="text-gray-600">Ongoing support and updates for your website and Hosting</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Logo Design</h3>
              <p className="text-gray-600">Professional brand identity and logo creation</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Print Design</h3>
              <p className="text-gray-600">Business cards, flyers, and marketing materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
