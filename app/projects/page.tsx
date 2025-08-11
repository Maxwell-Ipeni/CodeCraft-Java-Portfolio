"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Jacuzzi website",
      category: "React, Next.js, Tailwind CSS",
      description:
        "A premium e-commerce website for Jacuzzi Kenya featuring luxury wellness products, modern responsive design, and seamless user experience with yellow branding.",
      image: "/images/jacuzzi-website-full.jpeg",
      liveUrl: "https://soqo-true-jacuzzi.vercel.app/",
      previewUrl: "https://soqo-true-jacuzzi.vercel.app/",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      color: "bg-yellow-100",
    },
    {
      id: 2,
      title: "Restaurant customer feedback",
      category: "Dashboard, Analytics, Customer Management, Feedbacks, React, Chart.js, Node.js, MongoDB",
      description:
        "A comprehensive restaurant feedback management system with analytics dashboard, customer reviews tracking, and performance metrics visualization.",
      image: "/images/restaurant-feedback-dashboard.png",
      liveUrl: "https://example-restaurant-feedback.com",
      previewUrl: "https://example-restaurant-feedback.com",
      technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
      color: "bg-green-100",
    },
    {
      id: 3,
      title: "Graphic Design",
      category: "Logo, Brand Identity, Posters, social media stories, Flyers",
      description: "Creative and original designs for your brand using adobe photoshop, Canva, Figma.",
      image: "/images/graphic-design-portfolio-new.png",
      liveUrl: "https://example-photography.com",
      previewUrl: "https://example-photography.com",
      technologies: ["Adobe Photoshop", "Canva", "Figma"],
      color: "bg-purple-100",
    },
    {
      id: 4,
      title: "UI/UX designing",
      category: "UI/UX Design",
      description: "Complete UI/UX design system for a fintech application with user research and prototyping.",
      image: "/placeholder.svg?height=200&width=300",
      liveUrl: "https://example-fintech.com",
      previewUrl: "https://example-fintech.com",
      technologies: ["Figma", "Adobe XD", "Principle"],
      color: "bg-orange-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">My portfolio</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">My latest work</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to my development portfolio! Explore a collection of my projects showcasing my expertise in various
            areas.
          </p>
        </div>

        {/* Projects Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {/* Add Live View button overlay for all projects */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    asChild
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live View
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 relative">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-8 h-8 rounded-full bg-gray-900 hover:bg-gray-800 text-white p-0 flex items-center justify-center"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Preview Section */}
        {selectedProject && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Live View</h2>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-600">
                    {projects.find((p) => p.id === selectedProject)?.previewUrl}
                  </span>
                </div>
              </div>
              <div className="aspect-video bg-gray-50 flex items-center justify-center">
                <iframe
                  src={projects.find((p) => p.id === selectedProject)?.previewUrl}
                  className="w-full h-full"
                  title="Project Preview"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HTML5 & CSS3",
                  "JavaScript & TypeScript",
                  "React & Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Git & GitHub",
                  "Responsive Design",
                  "API Integration",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Design Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Canva",
                  "Logo Design",
                  "Print Design",
                  "Brand Identity",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
