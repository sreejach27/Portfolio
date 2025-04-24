"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, BarChart4, Database } from "lucide-react"
import ProjectModal from "@/components/project-modal"

const projects = [
  {
    id: "borderlands",
    title: "Digital humanities",
    description: "website with 95% accuracy deployed via a JavaScript, HTML web app",
    image: "C:\Users\schevula\Desktop\portfolio-master\portfolio-master\public\humanities.png",
    category: "Software Development",
    tags: ["Node.Js","CSS", "JavaScript", "HTML"],
    fullDescription:
      "Developed a website that achieved 95% accuracy. The model was deployed as a web application using JavaScript and HTML, making it accessible to everyone. This project was granted by borderlands organisation",
    technologies: [ "JavaScript", "HTML", "CSS", "Node.js"],
    links: {
      github: "https://github.com/sreejach27",
    },
    achievements: [
      "95% prediction accuracy",
      "Web-based deployment for easy access",
      "Integration with existing elpaso systems",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "website with 90% accuracy deployed via a JavaScript, HTML, React web app",
    image: "C:\Users\schevula\Desktop\portfolio-master\portfolio-master\public\sreeja portfoli.jpg",
    category: "Software Development",
    tags: ["Node.js", "HTML", "CSS", "Javascript", "React"],
    fullDescription:
      "Created a portfolio site using react.it shows about my profile and projects",
    technologies: ["Node.js", "HTML", "CSS", "Javascript", "React"],
    links: {
      github: "https://github.com/sreejach27",
    },
    achievements: [
      "easy access to my profile",
      "shows my profile in elaborate manner",
    ],
  },
 
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of software development projects that demonstrate my technical expertise and
            problem-solving abilities.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="data-engineering">
              <Database className="h-4 w-4 mr-2" /> Data Engineering
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart4 className="h-4 w-4 mr-2" /> Analytics
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => openProjectModal(project)}>
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </section>
  )
}

