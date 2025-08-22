import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 pl-8 lg:pl-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">Introduction</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">About me</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/passport-photo.png"
                alt="Max passport headshot"
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
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-left">
              I am a skilled Full-Stack Developer who builds scalable, 
               secure web applications using Spring Boot, React, and cloud technologies. 
              I solve critical problems like system fragmentation, poor performance, 
              and legacy modernization. 
              I streamline operations by integrating front-end and back-end systems for seamless data flow. 
              My solutions enhance security, scalability, and user experience to drive business growth. 
              I deliver efficient, future-ready software that reduces downtime and accelerates time-to-market.
              </p>
            </div>
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>HTML, CSS, JavaScript</div>
                    <div>React.js, Next.js, Tailwind css </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Bsc. in Mathematics and Computer Science</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Built more than 5 projects</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tools Section */}
            <div>
  <h3 className="text-xl font-semibold text-gray-900 mb-6">Tools I use</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Laravel framework(PHP)",
      "Adobe photoshop"
    ].map((tool, index) => (
      <div key={index} className="bg-white rounded-lg p-4 shadow-sm text-center">
        <span className="text-sm font-medium text-gray-700">{tool}</span>
      </div>
    ))}
  </div>
</div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900"> Fullstack Developer</h4>
                    <p className="text-gray-600">Tech solution Inc.</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Leading frontend development projects and mentoring junior developers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                    <p className="text-gray-600"> Upwork • 2022 - present</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Developed responsive websites and web applications for various clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Freelance Designer</h4>
                    <p className="text-gray-600"> Freelancer . 2022 - Present</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Providing graphic design and web development services to small businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
