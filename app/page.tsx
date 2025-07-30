import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Code2, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-gray-900">Shashank Gaur</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage src="/placeholder.svg?height=128&width=128" />
              <AvatarFallback className="text-2xl">AD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Shashank Gaur</h1>
                <p className="text-xl text-gray-600 mb-4">Frontend Developer & UI/UX Enthusiast</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    4+ Years Experience
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Passionate frontend developer with 4 years of experience crafting beautiful, user-centric web
                applications. I specialize in React, TypeScript, and modern web technologies, with a keen eye for design
                and performance optimization.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="#contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/Its-Shashank/" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/shashank-gaur-046b9b167/" target="_blank">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
            <p className="text-gray-600">A bit more about my background and interests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-blue-600" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">Webpack</Badge>
                    <Badge variant="outline">Jest</Badge>
                    <Badge variant="outline">Cypress</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  What I Love
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Creating intuitive user interfaces that solve real problems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Performance optimization and clean, maintainable code</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Staying up-to-date with the latest web technologies</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Collaborating with designers and backend developers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
            <p className="text-gray-600">My professional journey in frontend development</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Senior Frontend Developer</CardTitle>
                    <CardDescription className="text-base">TechCorp Inc. • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Led the development of a React-based dashboard serving 10k+ daily users</li>
                  <li>• Improved application performance by 40% through code splitting and optimization</li>
                  <li>• Mentored 2 junior developers and established frontend coding standards</li>
                  <li>• Collaborated with design team to implement a comprehensive design system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription className="text-base">StartupXYZ • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">2021 - 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Built responsive web applications using React and TypeScript</li>
                  <li>• Implemented automated testing with Jest and React Testing Library</li>
                  <li>• Worked closely with UX designers to create pixel-perfect interfaces</li>
                  <li>• Participated in agile development process and code reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Junior Frontend Developer</CardTitle>
                    <CardDescription className="text-base">WebAgency Pro • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">2020 - 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Developed client websites using HTML, CSS, JavaScript, and Vue.js</li>
                  <li>• Ensured cross-browser compatibility and mobile responsiveness</li>
                  <li>• Collaborated with backend developers to integrate APIs</li>
                  <li>• Maintained and updated existing client projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-600">Some of my recent work and side projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>React • TypeScript • Chart.js</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A comprehensive analytics dashboard with real-time data visualization, custom charts, and responsive
                  design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>E-commerce Platform</CardTitle>
                    <CardDescription>Next.js • Stripe • Prisma</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Task Management App</CardTitle>
                    <CardDescription>React Native • Redux • Firebase</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://example.com" target="_blank">
                        <Smartphone className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Cross-platform mobile app for task management with real-time synchronization and offline support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Design System" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Design System</CardTitle>
                    <CardDescription>Storybook • React • CSS-in-JS</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://example.com" target="_blank">
                        <Globe className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Comprehensive design system with reusable components, documentation, and automated testing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Storybook</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Styled Components</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Work Together</h2>
            <p className="text-gray-600">I'm always interested in new opportunities and collaborations</p>
          </div>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                    <p className="text-gray-700 mb-6">
                      I'm currently open to new opportunities and would love to hear about your project. Let's discuss
                      how we can work together!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">alex.developer@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">San Francisco, CA</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">4+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback className="text-xs">AD</AvatarFallback>
              </Avatar>
              <span className="text-gray-600">© 2025 Shashank Developer. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:alex.developer@email.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
