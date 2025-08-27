"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Download,
  Mail,
  Instagram,
  Music,
  Globe,
  Smartphone,
  Palette,
  Monitor,
  Code,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ArrowUpRight,
  MessageCircle,
  Layers,
  Database,
  FileCode,
  Paintbrush,
  Server,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254768610735"
    const message = "Hi! I'm interested in your web development and graphic design services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

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

  const projects = [
    {
      id: 1,
      title: "Jacuzzi website",
      category: "React, Next.js, Tailwind CSS",
      description:
        "A premium e-commerce website for Jacuzzi Kenya featuring luxury wellness products, modern responsive design, and seamless user experience with yellow branding.",
      image: "/images/jacuzzi-website-full.jpeg",
      liveUrl: "https://soqo-true-jacuzzi.vercel.app/",
    },
    {
      id: 2,
      title: "Learn with Betty - Language Tutor",
      category: "React, Next.js, Tailwind CSS, Vercel",
      description:
        "A modern, responsive language tutoring website for Betty Kimani featuring her English and Kiswahili teaching services, with booking system integration and beautiful UI design.",
      image: "/images/betty-website.svg",
      liveUrl: "https://learn-with-betty.vercel.app/",
    },
    {
      id: 3,
      title: "Restaurant customer feedback",
      category: "Dashboard, Analytics, Customer Management, Feedbacks, React, Chart.js, Node.js, MongoDB",
      description:
        "A comprehensive restaurant feedback management system with analytics dashboard, customer reviews tracking, and performance metrics visualization.",
      image: "/images/restaurant-feedback-dashboard.png",
      liveUrl: "https://example-restaurant-feedback.com",
    },
    {
      id: 4,
      title: "Graphic Design",
      category: "Logo, Brand Identity, Posters, social media stories, Flyers",
      description: "Creative and original designs for your brand using adobe photoshop, Canva, Figma.",
      image: "/images/graphic-design-portfolio-new.png",
      liveUrl: "https://example-photography.com",
    },
    {
      id: 5,
      title: "UI/UX designing",
      category: "UI/UX Design",
      description: "Complete UI/UX design system for a fintech application with user research and prototyping.",
      image: "/placeholder.svg?height=200&width=300",
      liveUrl: "https://example-fintech.com",
    },
  ]

  const tools = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: FileCode },
    { name: "Tailwind CSS", icon: Paintbrush },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Laravel framework(PHP)", icon: Layers },
    { name: "Adobe photoshop", icon: Palette },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Picture */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg relative">
                <Image
                  src="/images/passport-photo.png"
                  alt="Professional headshot"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Greeting */}
            <div className="mb-6">
              <h1 className="text-2xl text-gray-600 dark:text-gray-400 mb-2">Hi! ✋ I'm Maxwell Ipeni</h1>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                A Fullstack developer.
              </h2>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building Smarter, Scalable Solutions – From Code to Cloud.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black rounded-full px-8"
              >
                <a href="#contact">
                  contact me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-8 bg-white dark:bg-gray-900"
              >
                <Link href="/cv">
                  <Download className="mr-2 h-4 w-4" />
                  my resume
                </Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://tiktok.com/@MG-Dev"
                target="_blank"
                rel="Max"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Music className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/MG-Dev"
                target="_blank"
                rel="Max"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.javafullstackdevmax@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Introduction</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">About me</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/passport-photo.png"
                  alt="Professional headshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I am a skilled Full-Stack Developer who builds scalable, 
                 secure web applications using Spring Boot, React, and cloud technologies. 
                I solve critical problems like system fragmentation, poor performance, and legacy modernization. 
                I streamline operations by integrating front-end and back-end systems for seamless data flow. 
                My solutions enhance security, scalability, and user experience to drive business growth. 
                I deliver efficient, future-ready software that reduces downtime and accelerates time-to-market.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div>HTML, CSS, JavaScript</div>
                      <div>React.js, mySQL, Tailwind css</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div>Bsc. in Mathematics and Computer Science</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div>Built multiple projects</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tools Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Tools I use</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <tool.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-2">What I offer</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">My Services</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I am a fullstack developer.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-0 h-auto font-medium"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions for all your digital needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Web Creation, Maintenance and Hosting
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ongoing support and updates for your website and Hosting
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Logo Design</h3>
                <p className="text-gray-600 dark:text-gray-400">Professional brand identity and logo creation</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Print Design</h3>
                <p className="text-gray-600 dark:text-gray-400">Business cards, flyers, and marketing materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-2">My portfolio</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">My latest work</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Welcome to my development portfolio! Explore a collection of my projects showcasing my expertise in
              various areas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-50 dark:bg-gray-700 border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-gray-600">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Live View button overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild size="sm" className="bg-white text-black hover:bg-gray-100">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live View
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 relative">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.category}</p>
                      </div>
                      <Button
                        size="sm"
                        className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 text-white p-0 flex items-center justify-center"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Connect with me</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Get in touch</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below or
              direct chat on Whatsapp.
            </p>
          </div>

          {/* Contact Form */}
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
      </section>
    </div>
  )
}
