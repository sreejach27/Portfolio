"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react"

const experiences = [
  {
    id: "University of Texas",
    title: "Front End Developer",
    company: "University of Texas at El Paso",
    period: "September 2024 - Present",
    type: "work",
    description: [
      " Utilizing Figma to support the design and web development languages HTML, CSS, JavaScript, PHP and JQuery Framework for front end development to adapt conventional information resources to online platforms, enhancing the functionality of department websites",
      " Led a project to migrate a legacy web application to a modern architecture using .NET Framework, C# and React, improving performance by 60%, maintainability, and user experience.",
      " Developing a full-stack website with AI-powered chatbot using React, Node.js, Express.js, and OpenAI GPT API, integrating real-time messaging with Socket.io and automated email notifications using Nodemailer enhancing user interaction and support efficiency.",
      " Integrating GraphQL APIs for efficient data fetching, reducing API calls by 30%.",
    ],
  },
  {
    id: "uncc",
    title: "Assisstant Programmer",
    company: "University of North Carolina at Charlotte",
    period: "Aug 2023 - May 2024",
    type: "work",
    description: [
      " Assisted in the development and maintenance of university web applications using HTML, CSS, JavaScript, developed interactive UI components using React, enhancing responsiveness",
      " Created and maintained cross-browser compatible websites using CSS Grid, Flexbox, and JavaScript features to ensure consistency and responsiveness across multiple platforms.",
      
    ],
  },
  {
    id: "infosys",
    title: "System Engineer",
    company: "Infosys Limited",
    period: "July 2021 - December 2022",
    type: "work",
    description: [
      "Developed and maintained a highly interactive, user-friendly appointment scheduling web application using React, Next.js, and express.js, enhancing the booking experience for patients",
      " Used React HTTPClient and Express.js for efficient API handling, reducing redundant API calls and improving app load times.",
      "Developed modular and accessible UI components using HTML5, CSS3 and TypeScript, ensuring a modern, responsive, and WCAG-compliant user experience",
      "Designed and implemented dynamic front-end interfaces with React, and Bootstrap, delivering seamless cross-platform interactions and an intuitive user experience.",
      " Used Git for version control, managing codebase changes effectively and collaborating seamlessly with other developers.",
      " Used Axios with React HTTPClient to integrate RESTful APIs, allowing real-time data retrieval and ensuring a seamless user experience",

    ],
  },
  {
    id: "coreel",
    title: "Web Developer",
    company: "Coreel Technologies",
    period: "May 2020 - June 2021",
    type: "work",
    description: [
      "Led the redesign of the e-commerce platform's user interface, implementing modern design principles to enhance user experience and increase engagement.",
    "Developed responsive web pages using HTML5, Bootstrap,Javascript, ensuring optimal performance and usability across desktops, tablets, and mobile devices.",
   "Utilized React, Next.jsto build dynamic,server-rendered, and statically generated components, improving performance, SEO, and user engagement.",
  "Ensured the platform's compatibility across various browsers, providing consistent experience for all users.",

    ],
  },
 
  {
    id: "masters",
    title: "Master of Science in Computer Science",
    company: "University of North Carolina at Charlotte",
    period: "Jan 2023 - May 2024",
    type: "education",
    description: [
      "Specialized in Data Science",
      "Maintained a 3.9 GPA while working as a Assistant Programmer.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in Development, along with my educational background.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm text-muted-foreground">
                      
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

