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
    title: "Digital humanities Website",
    description: "website with 95% accuracy deployed via a JavaScript, HTML web app",
    image: "/humanities.png",
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
    description: "portfolio deployed via a JavaScript, HTML, React web app",
    image: "/portfolio.png",
    category: "Software Development",
    tags: ["Node.js", "HTML", "CSS", "Javascript", "React"],
    fullDescription:
      "Created a portfolio site using react.it shows about my profile and projects",
    technologies: ["Node.js", "HTML", "CSS", "Javascript", "React"],
    links: {
      github: "https://github.com/sreejach27/Portfolio",
    },
    achievements: [
      "easy access to my profile",
      "shows my profile in elaborate manner",
    ],
  },
  {
    id: "Web Application",
    title: "Website",
    description: "website deployed via a JavaScript, HTML, CSS, PHP ",
    image: "/Career.jpg",
    category: "Software Development",
    tags: ["PHP", "HTML", "CSS", "Javascript"],
    fullDescription:
      "Created a website using Php.it shows about variour career options",
    technologies: ["PHP", "HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/sreejach27/Web-application-Career-Guidance",
    },
    achievements: [
      "users can register the site and login into their account",
      "shows various kinds of career options available.",
    ],
  },
  {
    id: "Android Application",
    title: "Android Application",
    description: "Application deployed via a Java, Android Studio,Firebase, XML ",
    image: "/MVSR.jpg",
    category: "Software Development",
    tags: ["java", "XML", "Android Studio", "Firebase"],
    fullDescription:
      "Created a Application using Java.It is a app to file a complaint to respective department",
    technologies: ["java", "XML", "Android Studio", "Firebase"],
    links: {
      github: "https://github.com/sreejach27/Android-Application",
    },
    achievements: [
      "users can register the app and login into their account.",
      "users can submit their requests to the respective department.",
    ],
  },
  {
    id: "Lightweight Seamless Authentication Based on Gait in Wearable IoT Systems",
    title: "Lightweight Seamless Authentication Based on Gait in Wearable IoT Systems",
    description: "Application deployed via a Java, Android Studio,Firebase, XML ",
    image: "/you walk we authenticimg.jpg",
    category: "Software Development",
    tags: ["Machine Learning", "KNN Algorithm", "Random Forest Algorithm", "Multilayer Perceptron Algorithm"],
    fullDescription:
      "You Walk, We Authenticate is a lightweight seamless authentication framework based on gait (LiSA-G) that can authenticate and identify users on the widely available commercial smartwatches",
    technologies: ["Machine Learning", "KNN Algorithm", "Random Forest Algorithm", "Multilayer Perceptron Algorithm"],
    links: {
      github: "https://github.com/sreejach27",
    },
    achievements: [
      " User's unique walking pattern, gait, which is the pattern of limb movements during locomotion, can be utilized as a biometric feature for their authentication.",
      
    ],
  },
  {
    id: "Visualisation",
    title: "Data Visualisation",
    description: "Visualisation using Plotly express and created scatter plots, bar charts, histograms.",
    image: "/visualisation.png",
    category: "Software Development",
    tags: ["Plotly Express", "Python","Jupyter Notebook"],
    fullDescription:
      "Created a different kinds of visualisations using Plotly",
    technologies: ["Plotly Express", "Python","Jupyter Notebook"],
    links: {
      github: "https://github.com/sreejach27/Visualization",
    },
    achievements: [
      "quickly spot patterns, trends",
      "easy for users to explore the data",
    ],
  },
  {
    id: "sentiment analysis",
    title: "Sentiment Analysis using Python",
    description: "Sentiment Analysis model that can precisely categorize tweets of university into categories of positive and negative sentiments.",
    image: "/NLP.png",
    category: "Natural Language Processing",
    tags: ["Python","TF-IDF algorithm","confusion matrix", "Jupyter Notebook"],
    fullDescription:
      " Created a Python-based sequential neural network model for sentiment analysis of tweets",
    technologies: ["Sentiment Analysis","Python","TF-IDF algorithm","confusion matrix"],
    links: {
      github: "https://github.com/sreejach27/Sentiment-Analysis-Using-PythonSentiment-Analysis-Using-Python",
    },
    achievements: [
     "Effectiveness of natural language processing methods for the analysis of text data and the extraction of valuable insights",
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

