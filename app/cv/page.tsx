"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, FileText, User, Briefcase, GraduationCap, Award } from "lucide-react"

export default function CVPage() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600"
    link.download = "MG_Creatives_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreviewCV = () => {
    window.open("/placeholder.svg?height=800&width=600", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">Professional Resume</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Download My CV</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional portfolio, skills, experience, and achievements in web development and
            graphic design.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* CV Preview and Download */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Professional CV</CardTitle>
                  <p className="text-gray-600">Comprehensive resume showcasing my experience and expertise</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">CV Preview</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={handleDownloadCV} className="flex-1 bg-black hover:bg-gray-800" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button
                      onClick={handlePreviewCV}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 bg-white"
                      size="lg"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>

                  <div className="text-sm text-gray-600 space-y-2 bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>File Format:</strong> PDF
                    </p>
                    <p>
                      <strong>File Size:</strong> ~2.5 MB
                    </p>
                    <p>
                      <strong>Last Updated:</strong> January 2025
                    </p>
                    <p>
                      <strong>Language:</strong> English
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CV Highlights */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CV Highlights</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Here's a quick overview of what you'll find in my comprehensive CV.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Professional Summary</h3>
                        <p className="text-gray-600">
                        I am a skilled Java Full-Stack Developer who builds scalable, 
                        secure web applications using Spring Boot, React, and cloud technologies. 
                        I solve critical problems like system fragmentation, poor performance, 
                        and legacy modernization. I streamline operations by integrating front-end 
                        and back-end systems for seamless data flow. My solutions enhance security, 
                        scalability, and user experience to drive business growth. 
                        I deliver efficient, future-ready software that reduces downtime 
                        and accelerates time-to-market.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Briefcase className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Work Experience</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Senior Java Web Developer at Tech Solutions Inc.</li>
                          <li>• Freelance Graphic Designer (2020-Present)</li>
                          <li>• Frontend Developer at Upwork</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Education</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Bachelor's in Mathematics and Computer Science</li>
                          <li>• Graphic Design Certification</li>
                          <li>• Various Online Courses & Certifications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Award className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Key Achievements</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Passionate about writing clean, maintainable code and delivering robust 
                            solutions that align with business goals. </li>
                          <li>• Award-winning logo design for local business</li>
                          <li>• Delivering reliable, future-proof software that empowers organizations to innovate, 
                            scale, and stay ahead in a competitive digital landscape.</li>
                          <li>• Successfully delivered 20+ projects on time</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
