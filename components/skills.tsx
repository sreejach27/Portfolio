"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fadeIn } from "@/lib/animations"
import { Database, Cloud, Code, BarChart, Server, Workflow } from "lucide-react"


const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "C++", level: 80 },
      { name: "C#", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "VBScript", level: 80 },
      { name: "PHP", level: 90 },
      { name: "XML", level: 80 },
      { name: "DHTML", level: 80 },
    ],
  },
  {
    id: "frontend",
    name: "Frameworks & Tools",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      { name: "React", level: 90 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "Rest API", level: 90 },
      { name: "GraphQL", level: 85 },
    ],
  },
  
  
  {
    id: "design",
    name: "Design & CMS Tools",
    icon: <BarChart className="h-5 w-5" />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Joomla", level: 90 },
      { name: "Cascade CMS", level: 95 },
      { name: "October", level: 80 },
      { name: "Git", level: 90 },
      { name: "Github", level: 90 },
      { name: "Jira", level: 90 },
      { name: "Slack", level: 90 },
    ],
  },
  
  {
    id: "databases",
    name: "Database & Cloud Platforms",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "SQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 90 },
      { name: "AWS", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "Oracle", level: 80 },
    ],
  },
  {
    id: "testing",
    name: "Testing Tools & Cloud & BI",
    icon: <BarChart className="h-5 w-5" />,
    skills: [
      
      { name: "NLTK", level: 85 },
      { name: "Power BI", level: 90 },
      { name: "SSIS", level: 80 },
      { name: "Hadoop", level: 80 },
      { name: "Spark", level: 80 },
      { name: "Kafka", level: 80 },
      { name:"AWS", level:95 },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages")

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          My technical toolkit spans across various aspects of software development, empowering me to craft seamless, responsive, 
          and user-centric web interfaces from concept to deployment.
          </p>
        </motion.div>

        <Tabs defaultValue="languages" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex flex-col items-center gap-2 py-3">
                {category.icon}
                <span className="text-xs">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      {category.icon} {category.name} Expertise
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      My proficiency in {category.name.toLowerCase()} enables me to {getSkillDescription(category.id)}
                    </p>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-primary rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                 
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function getSkillDescription(categoryId: string): string {
  switch (categoryId) {
   
      case "languages":
        return "develop dynamic and efficient applications using a wide range of programming languages and scripting technologies.";
      case "frontend":
        return "build responsive, scalable, and interactive web applications using modern frameworks and front-end tools.";
      case "design":
        return "design user-centric interfaces and manage content using cutting-edge design tools and CMS platforms.";
      case "databases":
        return "design and manage robust databases and cloud platforms for seamless data storage and access.";
      case "testing":
        return "ensure application quality through testing tools, and derive insights using BI platforms.";
      default:
        return "deliver full-stack solutions combining clean design, powerful functionality, and scalable infrastructure.";
    
    
  }
}

