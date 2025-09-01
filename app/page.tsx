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
                <AvatarImage src="/dp.jpgs" />
                <AvatarFallback>SG</AvatarFallback>
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
            <Avatar className="h-24 w-24 md:h-56 md:w-56">
              <AvatarImage src="/dp.jpg?height=128&width=128" />
              <AvatarFallback className="text-2xl">SG</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Shashank Gaur</h1>
                <p className="text-xl text-gray-600 mb-4">Fullstack Developer & Software Engineer</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Bengaluru, India
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    4+ Years Experience
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Passionate fullstack developer with 4 years of experience building end-to-end web applications. 
                I specialize in React, Node.js, TypeScript, Golang, and modern web technologies, with expertise in both 
                frontend and backend development, database design, and cloud deployment.
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
                    <Badge variant="secondary">Apollo Client GraphQL</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">State management</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">Golang</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">RabbitMQ</Badge>
                    <Badge variant="secondary">Kafka</Badge>
                    <Badge variant="secondary">Elasticsearch</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
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
                  <p className="text-gray-700">Building complete web applications from database to user interface</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Architecting scalable backend systems and RESTful APIs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Deploying applications to cloud platforms and managing infrastructure</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Collaborating across the full development stack and mentoring teams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
            <p className="text-gray-600">My professional journey in fullstack development</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Senior Software Engineer</CardTitle>
                    <CardDescription className="text-base">Dezerv Investments • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">April 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Solved the 302 redirection issue to 301 permanent redirect for more than 26000 SEO pages which were not getting indexed and fixed more than 25000 pages were giving 404 because of incorrect URLs for all mutual funds and bonds pages.</li>
                  <li>• Reduced POSTGRES DB query timing from 40 seconds during build to less than 700ms.</li>
                  <li>• Was involved in setting up Slot Manager microservice from scratch and build the Roster Management System for the Business .</li>
                  <li>• Migrated the entire Dezerv website from Gatsby to Next.js</li>
                  <li>• Improved core web-vitals and lighthouse score from 10 to above 90.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Fullstack Developer</CardTitle>
                    <CardDescription className="text-base">Drip Capital • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">December 2021 - April 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Build the onboarding portal from scratch, including pre-underwriting, underwriting, and post-underwriting journey for the customers. Took complete ownership of the Mexico and US regions of the application. Added support for multiple roles along with customer in the application such as Business Manager and Channel Partners.</li>
                  <li>• Worked on Legacy products in Vue.js. Added support for roles for the customer and made every entity or action modular. This allowed support to customize permissions for different users who use the portal.</li>
                  <li>• Built the component library using storybook and React in the first iteration and later reduced its bundle size by more than 50%.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription className="text-base">Arvolution • Full-time (Contract)</CardDescription>
                  </div>
                  <Badge variant="outline">April 2021 - December 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Worked on building React Native UI, frontend logic, reusable components, and integrations to the backend using GraphQL endpoints.</li>
                  <li>• Joined as a Frontend Engineer but later on started contributing to the backend as well.</li>
                  <li>• Led a team in the development of a core feature for one of the largest retail companies in Latin America.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-600">Some of my recent fullstack work and side projects</p>
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
                    <CardDescription>React • Node.js • PostgreSQL • Chart.js</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com/Its-Shashank/" target="_blank">
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
                  A comprehensive fullstack analytics dashboard with real-time data visualization, RESTful APIs, 
                  database integration, and responsive design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Express</Badge>
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
                      <Link href="https://github.com/Its-Shashank/" target="_blank">
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
                  Full-stack e-commerce solution with payment processing, inventory management, admin dashboard, 
                  user authentication, and RESTful API backend.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
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
                    <CardDescription>React Native • Node.js • MongoDB • Firebase</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com/Its-Shashank/" target="_blank">
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
                  Cross-platform mobile app with custom backend API, real-time synchronization, offline support, 
                  and user authentication system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
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
                    <CardTitle>Fullstack Component Library</CardTitle>
                    <CardDescription>React • Node.js • Storybook • API Integration</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="https://github.com/Its-Shashank/" target="_blank">
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
                  Comprehensive fullstack component library with reusable UI components, API utilities, 
                  database helpers, and automated testing suite.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Storybook</Badge>
                  <Badge variant="secondary">Jest</Badge>
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
                      <span className="text-gray-700">Bengaluru, India</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/Its-Shashank/" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.linkedin.com/in/shashank-gaur-046b9b167/" target="_blank">
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
              <Link href="https://github.com/Its-Shashank/" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/shashank-gaur-046b9b167/" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:work.shashankgaur@gmail.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
