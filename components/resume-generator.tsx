"use client"

import { useEffect } from "react"

export default function ResumeGenerator() {
  useEffect(() => {
    // This is a client-side workaround to create a downloadable resume
    // In a real project, you would simply place the PDF in the public folder
    const createResumeBlob = async () => {
      try {
        // Check if we're in the browser environment
        if (typeof window === "undefined") return

        // Create a simple text version of the resume for demonstration
        // In a real project, you would use the actual PDF file
        const resumeText = `
Sreeja Reddy
sreejareddy0928@gmail.com
(812) 361-4842
Professional Summary:
Experienced Software Developer with a strong background in using Angular, Next.js, Node.js, Express.js, 
JavaScript, Typescript. Proficient in building enterprise-level web applications using front-end technologies like 
HTML5, CSS3, and PHP, along with database management using MySQL, MongoDB, and SQL Server. Expertise 
in integrating RESTful APIs for seamless data flow and ensuring web accessibility standards. Adept at working in 
Agile teams to deliver high-quality, user-centric applications with a focus on performance, security, and scalability.
Education:
Bachelor of Engineering: Information Technology (August 2017-July 2021)
Osmania University
Master of Science: Computer Science (Data Science Concentration) (January 2023-May 2024)
University of North Carolina at Charlotte
Experience:
Software Developer-Front End Web Developer
University of Texas at El Paso (September 2024 - Present)
• Currently developing and maintaining web page content for college-level websites and grants 
using Cascade CMS, Joomla, October ensuring accuracy, relevance, and timely updates.
• Utilizing phpMyAdmin and MySQL Workbench for effective database administration and maintenance; 
developing MySQL databases for web and application data management.
• Utilizing Figma to support the design and web development languages HTML, CSS, JavaScript, PHP 
and JQuery Framework for front end development to adapt conventional information resources to 
online platforms, enhancing the functionality of department websites.
• Led a project to migrate a legacy web application to a modern architecture using .NET Framework, C# 
and Angular, improving performance by 60%, maintainability, and user experience.
• Built a platform using Angular and Node.js, integrating server-side rendering with Next.js.
• Integrating GraphQL APIs for efficient data fetching, reducing API calls by 30%.
• Developing a full-stack website with AI-powered chatbot using Angular, Node.js, Express.js, and OpenAI 
GPT API, integrating real-time messaging with Socket.io and automated email notifications using 
Nodemailer enhancing user interaction and support efficiency.
• Deployed the application on AWS using EC2 and S3 for hosting, leveraged AWS Lambda for serverless 
functions, and used API Gateway for secure API management, enhancing scalability and reliability.
• Ensuring compliance with federal, state, and institutional policies on web usage, security, and 
accessibility standards, including WCAG guidelines.
Assistant Programmer
University of North Carolina at Charlotte (August 2023-May 2024)
• Assisted in the development and maintenance of university web applications using HTML, CSS, 
JavaScript, developed interactive UI components using Angular, enhancing responsiveness.
• Created and maintained cross-browser compatible websites using CSS Grid, Flexbox, and 
JavaScript features to ensure consistency and responsiveness across multiple platforms.
System Engineer
Infosys (July 2021-December 2022)
• Developed and maintained a highly interactive, user-friendly appointment scheduling web 
application using Angular, Next.js, and express.js, enhancing the booking experience for 
patients.
• Used Angular HTTPClient and Express.js for efficient API handling, reducing redundant
API calls and improving app load times.
• Developed modular and accessible UI components using HTML5, CSS3 and TypeScript, 
ensuring a modern, responsive, and WCAG-compliant user experience.
• Designed and implemented dynamic front-end interfaces with Angular, and Bootstrap, 
delivering seamless cross-platform interactions and an intuitive user experience.
• Used Git for version control, managing codebase changes effectively and collaborating seamlessly 
with other developers.
• Participated in Agile development processes, contributing to sprint planning, daily stand-ups, 
and retrospective meetings to enhance team productivity and project delivery.
• Implemented responsive design principles to ensure optimal viewing experiences on desktops, 
tablets, and mobile devices, increasing mobile user satisfaction.
• Used Axios with Angular HTTPClient to integrate RESTful APIs, allowing real-time data retrieval
and ensuring a seamless user experience.
• Collaborated with back-end developers to integrate Node.js and Express.js with the Angular 
front- end, ensuring smooth data flow and enhancing the application's functionality.
• Utilized Jest and Jasmine to write unit and integration tests, ensuring high-quality, bug-free
releases.
• Collaborated closely with designers, and product managers, gathering requirements and 
defining specifications for projects, ensuring on-time delivery using Jira for project 
management.
Web Developer
Coreel Technologies ( May 2020-June 2021)
• Led the redesign of the e-commerce platform's user interface, implementing modern design principles 
to enhance user experience and increase engagement.
• Developed responsive web pages using HTML5, Bootstrap,Javascript, ensuring optimal performance 
and usability across desktops, tablets, and mobile devices.
• Utilized Angular, Next.jsto build dynamic,server-rendered, and statically generated
components, improving performance, SEO, and user engagement.
• Ensured the platform's compatibility across various browsers, providing consistent experience for 
all users.
SKILLS:
Programming Languages & Technologies: Python, Java, C#, HTML5/CSS3, PHP, DHTML React, 
Angular, Vue.js, Node.js, Next.js, C, C++, Express.js, VBScript, XML, Java Script, TypeScript, Agile 
Software Development.
Database & Cloud Platforms: SQL, MongoDB, MySQL, Firebase, AWS, PostgreSQL, Oracle.
Tools & Frameworks: NLTK, Power BI, SSIS, Jest, Hadoop, Spark, Kafka, Rest API, Atom, WebStorm, Jira, 
Slack, GraphQL, Git, Github, Webpack, Bootstrap, Joomla, Figma, Cascade CMS, October, Jasmine.
CERTIFICATIONS:
• AWS Certified Cloud Practitioner
• AWS Certified Developer – Associate
• AWS Certified DevOps Engineer – Professional
PROJECTS:
You Walk, We authenticate (User Authentication System):
• Developed and implemented an innovative wearable IoT authentication framework utilizing GAIT 
analysis and machine learning algorithms to analyze user gait data; reduced false positive 
authentication incidents by 40%, ensuring a secure and efficient user experience of any 
organization.
Fine Arts Club (Standalone web application):
• Developed a web application that allows students to explore and register for various college clubs. I 
designed the front-end using Angular and CSS for a responsive user experience and integrated the
back- end with Node.js and MongoDB to ensure real-time updates. I also implemented Firebase 
authentication for secure user management. This project improved student engagement and 
streamlined the club registration process.
The Portal Sleuth (Django based Web application):
• Developed a project using RAKE-NLTK to mine and analyze user opinions and reviews for website 
evaluation. I implemented natural language processing algorithms, designed a user-friendly interface 
for displaying results, and integrated a back-end database for efficient data storage and retrieval. This 
project provided valuable insights into user satisfaction and website performance.
MVSR Grievances System (Android application):
• Developed an Android application that serves as an interface between students, staff, and college 
administration. The app allows users to report issues directly to the administration, streamlining 
the complaint process and reducing inconvenience for individuals facing problems within the 
college.
        `

        // Create a Blob from the text
        const blob = new Blob([resumeText], { type: "text/plain" })

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob)

        // Create a link element
        const link = document.createElement("a")
        link.href = url
        link.download = "Shashidhar_Chavula_Resume.txt"

        // Append to the document
        document.body.appendChild(link)

        // Trigger a click on the link
        link.click()

        // Clean up
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error("Error creating resume blob:", error)
      }
    }

    // We don't want to automatically create the blob on page load
    // This is just to set up the functionality
  }, [])

  return null
}

