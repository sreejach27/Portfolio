"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { fadeIn } from "@/lib/animations"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img src="\sreeja portfoli.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">3+ Years</p>
              <p className="text-sm">Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Front End Developer with a passion for Development</h3>
            <p className="text-muted-foreground mb-6">
              I specialize in designing and developing responsive, user-friendly interfaces and building 
              seamless front-end architectures that enhance user experience. With expertise in JavaScript, TypeScript, HTML5, CSS3, and modern frameworks like React and React, 
              I create scalable web applications that are both accessible and visually engaging.
            </p>
            <p className="text-muted-foreground mb-6">My background blends strong technical skills with a keen eye for user-centric design, allowing me to translate complex requirements into intuitive and interactive user interfaces. 
              I'm passionate about crafting high-performance front-end solutions and constantly stay updated with the latest trends in development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-muted-foreground">Sreeja Ch</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-muted-foreground">sreejareddy0928@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>

            <Button className="gap-2" asChild>
              <a href="\Sreeja FrontSt L U.pdf" download>
               Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



