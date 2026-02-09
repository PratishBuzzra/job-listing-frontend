import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.jpg';
import img4 from '../assets/images/04.jpg';
import img5 from '../assets/images/05.jpg';
import img6 from '../assets/images/06.jpg';
import img7 from '../assets/images/07.jpg';
import img8 from '../assets/images/08.jpg';
import img9 from '../assets/images/09.jpg';

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    type: "Full-time",
    experience: "3+ years",
    location: "Remote",
    tags: ["Remote", "Full-time"],
    posted: "2 days ago",
    responsibilities: [
      "Develop and maintain complex web applications using JavaScript (React/Angular/Vue), HTML, and CSS.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Optimize applications for maximum speed and scalability.",
      "Write clean, maintainable, and testable code.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Stay up to date with the latest trends in frontend technologies."
    ],
    requirements: [
      "3+ years of experience in frontend development with a solid understanding of HTML, CSS, and JavaScript frameworks.",
      "Experience with React (preferred) or other modern JavaScript frameworks.",
      "Strong understanding of responsive design and cross-browser compatibility.",
      "Proficiency in Git and version control.",
      "Familiarity with RESTful APIs and asynchronous programming.",
      "Excellent problem-solving skills and attention to detail.",
      "Strong communication and collaboration skills."
    ],
    benefits: [
      "Competitive salary with performance-based bonuses.",
      "Flexible working hours and the option to work remotely.",
      "Health, dental, and vision insurance.",
      "Paid time off and sick leave.",
      "Professional development opportunities and access to conferences."
    ],
    requiredSkills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Git",
      "REST APIs",
      "Responsive Design"
    ],
    aboutCompany: "TechCorp Solutions is a digital product agency that blends creativity with technology to build meaningful experiences.",
    image: img1 
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Studio",
    tags: ["Hybrid", "Full-time", "$120k-$150k", "entry-level" , ""],
    type: "Full-time",
    experience: "Mid-level",
    location: "Remote",
    posted: "1 week ago",
    responsibilities: [
      "Lead the design process from ideation to execution for new product features.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Collaborate with engineers and product managers to ensure design solutions are both user-friendly and technically feasible.",
      "Conduct user research to inform design decisions and iterate based on user feedback.",
      "Maintain and evolve the design system."
    ],
    requirements: [
      "3-5 years of experience in product design, UX/UI design, or a related field.",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
      "Experience with user research and usability testing.",
      "Strong portfolio showcasing end-to-end design processes and solutions.",
      "Solid understanding of user-centered design principles.",
      "Experience working in agile environments."
    ],
    benefits: [
      "Competitive salary based on experience.",
      "Health and wellness benefits (mental health support, gym memberships).",
      "Flexible remote work options.",
      "Access to learning and development resources.",
      "A dynamic and creative team environment."
    ],
    requiredSkills: [
      "Figma",
      "Sketch",
      "UX/UI Design",
      "Usability Testing",
      "User Research",
      "Agile"
    ],
    aboutCompany: "Creative Studio is a multidisciplinary design studio creating impactful digital products.",
    image: img2  
  },
  {
    id: 3,
    title: "UX Researcher Intern",
    company: "TechCorp Solutions",
    tags: ["On-Site", "Full-time", "Intenship"],
    type: "Internship",
    experience: "Fresher/Entry-level",
    location: "Remote",
    posted: "2 days ago",
    responsibilities: [
      "Conduct user interviews, usability testing, and surveys to gather user insights.",
      "Analyze qualitative and quantitative data to identify patterns and trends.",
      "Collaborate with the design team to create user personas, journey maps, and empathy maps.",
      "Present research findings to stakeholders in a clear and compelling way.",
      "Assist in maintaining the research repository and documentation."
    ],
    requirements: [
      "Currently enrolled in or recently graduated from a degree in HCI, Psychology, Anthropology, or a related field.",
      "Strong understanding of user-centered design principles.",
      "Experience with qualitative research methods (interviews, usability testing).",
      "Excellent communication and storytelling skills."
    ],
    benefits: [
      "Competitive stipend, flexible working hours, and the opportunity to work on real-world projects.",
      "Mentorship by experienced researchers and designers.",
      "Access to resources for career development and learning."
    ],
    requiredSkills: [
      "User Research",
      "Usability Testing",
      "Interviewing",
      "Data Analysis",
      "Figma"
    ],
    aboutCompany: "TechCorp Solutions is a digital product agency that blends creativity with technology to build meaningful experiences.",
    image: img3  
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "InnovateTech Inc.",
    tags: ["Remote", "Full-time"],
    type: "Full-time",
    experience: "2-5 years",
    location: "Remote",
    salary: "$100k-$130k",
    posted: "1 day ago",
    responsibilities: [
      "Design, implement, and maintain scalable software systems.",
      "Collaborate with cross-functional teams to define requirements and deliver features.",
      "Write efficient, testable, and reusable code.",
      "Troubleshoot, debug, and optimize existing systems.",
      "Ensure the software meets both functional and non-functional requirements."
    ],
    requirements: [
      "2-5 years of experience in software development.",
      "Proficiency in programming languages such as Python, Java, or C++.",
      "Experience with database management (SQL, NoSQL).",
      "Familiarity with cloud platforms like AWS, GCP, or Azure.",
      "Strong problem-solving skills and the ability to work independently."
    ],
    benefits: [
      "Competitive salary and performance bonuses.",
      "Remote-first with flexible working hours.",
      "Paid health insurance and wellness programs.",
      "Career growth and professional development opportunities."
    ],
    requiredSkills: [
      "Python",
      "Java",
      "C++",
      "SQL",
      "NoSQL",
      "AWS",
      "GCP",
      "Azure"
    ],
    aboutCompany: "InnovateTech Inc. builds innovative software solutions for businesses across industries.",
    image: img4 
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataVision Solutions",
    tags: ["Remote", "Full-time"],
    type: "Full-time",
    experience: "2+ years",
    location: "Remote",
    salary: "$110k-$140k",
    posted: "3 days ago",
    responsibilities: [
      "Analyze and interpret complex data to inform decision-making.",
      "Build predictive models and machine learning algorithms.",
      "Collaborate with stakeholders to define key metrics and objectives.",
      "Automate data processing and reporting tasks.",
      "Create data visualizations to communicate findings clearly."
    ],
    requirements: [
      "2+ years of experience in data science or a related field.",
      "Strong proficiency in Python, R, or similar programming languages.",
      "Experience with machine learning frameworks and libraries (e.g., TensorFlow, Scikit-Learn).",
      "Strong knowledge of statistics and data analysis techniques.",
      "Familiarity with data visualization tools (e.g., Tableau, Power BI).",
      "Strong communication and problem-solving skills."
    ],
    benefits: [
      "Competitive salary with performance-based bonuses.",
      "Flexible working hours and the ability to work remotely.",
      "Health and dental insurance.",
      "Generous PTO policy and paid holidays.",
      "Learning and development stipend."
    ],
    requiredSkills: [
      "Python",
      "R",
      "Machine Learning",
      "Statistics",
      "Data Analysis",
      "Tableau",
      "Power BI"
    ],
    aboutCompany: "DataVision Solutions is a leader in data-driven insights, helping businesses make smarter decisions.",
    image: img5  
  },
   {
    id: 6,
    title: "Backend Developer",
    company: "DevTech Labs",
    tags: ["Remote", "Full-time", "$90k-$120k"],
    type: "Full-time",
    experience: "3+ years",
    location: "Remote",
    posted: "1 week ago",
    responsibilities: [
      "Design and implement backend architecture for web applications.",
      "Build RESTful APIs and integrate with third-party services.",
      "Optimize server-side logic for scalability and performance.",
      "Work closely with frontend developers to define API endpoints and ensure smooth integration.",
      "Collaborate with the team on architecture design and code reviews."
    ],
    requirements: [
      "3+ years of experience in backend development with a focus on Node.js, Python, or Java.",
      "Experience with database management (SQL, PostgreSQL, MongoDB).",
      "Familiarity with cloud platforms (AWS, GCP, Azure).",
      "Strong knowledge of server-side programming and API development.",
      "Experience with Docker and containerization.",
      "Excellent problem-solving and communication skills."
    ],
    benefits: [
      "Competitive salary and performance bonuses.",
      "Remote-first with flexible hours.",
      "Paid health insurance and wellness programs.",
      "Career growth opportunities and learning resources."
    ],
    requiredSkills: [
      "Node.js",
      "Python",
      "Java",
      "SQL",
      "MongoDB",
      "AWS",
      "Docker"
    ],
    aboutCompany: "DevTech Labs is a cutting-edge software development agency focused on delivering robust and scalable backend solutions.",
    image: img6
  },

  {
    id: 7,
    title: "Digital Marketing Manager",
    company: "MarketGenius",
    tags: ["Remote", "Full-time", "$80k-$110k"],
    type: "Full-time",
    experience: "Mid-level",
    location: "Remote",
    posted: "4 days ago",
    responsibilities: [
      "Develop and execute digital marketing strategies to increase brand visibility and engagement.",
      "Manage social media platforms, email campaigns, and paid advertising efforts.",
      "Analyze campaign performance and optimize for better ROI.",
      "Collaborate with content creators, designers, and the sales team to drive growth.",
      "Stay updated on digital marketing trends and implement best practices."
    ],
    requirements: [
      "3+ years of experience in digital marketing, SEO, and social media management.",
      "Proficiency in Google Analytics, SEMrush, or similar tools.",
      "Strong understanding of content marketing and lead generation strategies.",
      "Experience with paid advertising platforms (Google Ads, Facebook Ads).",
      "Excellent communication and creative thinking skills."
    ],
    benefits: [
      "Competitive salary with bonus opportunities.",
      "Health and dental insurance.",
      "Remote work flexibility with a collaborative team environment.",
      "Access to online learning resources and courses."
    ],
    requiredSkills: [
      "SEO",
      "Google Analytics",
      "Social Media Marketing",
      "Paid Ads",
      "Content Marketing",
      "Email Campaigns"
    ],
    aboutCompany: "MarketGenius helps brands build strong digital presences through innovative marketing strategies and cutting-edge analytics.",
    image: img7
  },

  {
    id: 8,
    title: "Full Stack Developer",
    company: "TechTonic Studios",
    tags: ["Hybrid", "Full-time", "$110k-$140k"],
    type: "Full-time",
    experience: "3+ years",
    location: "Hybrid",
    posted: "1 day ago",
    responsibilities: [
      "Develop full-stack web applications using JavaScript (React, Node.js), HTML, CSS, and databases (SQL, MongoDB).",
      "Design and implement scalable RESTful APIs.",
      "Work closely with product and design teams to bring new features to life.",
      "Ensure application security and performance optimization.",
      "Collaborate with the QA team to ensure high-quality code."
    ],
    requirements: [
      "3+ years of experience as a full-stack developer.",
      "Proficiency in JavaScript frameworks (React, Node.js, Express).",
      "Experience with SQL and NoSQL databases.",
      "Familiarity with Docker and cloud services (AWS, GCP).",
      "Solid understanding of RESTful APIs and microservices architecture."
    ],
    benefits: [
      "Competitive salary with annual bonuses.",
      "Flexible hybrid work model.",
      "Paid health and wellness benefits.",
      "Opportunities for professional growth and development."
    ],
    requiredSkills: [
      "React",
      "Node.js",
      "Express",
      "SQL",
      "MongoDB",
      "REST APIs",
      "Docker"
    ],
    aboutCompany: "TechTonic Studios is a dynamic software agency known for building high-performance web and mobile applications.",
    image: img8
  },

  {
    id: 9,
    title: "Cloud Solutions Architect",
    company: "CloudMasters",
    tags: ["Remote", "Full-time", "$150k-$180k"],
    type: "Full-time",
    experience: "5+ years",
    location: "Remote",
    posted: "2 days ago",
    responsibilities: [
      "Design and implement cloud infrastructure solutions on AWS, GCP, or Azure.",
      "Collaborate with development and operations teams to ensure scalable cloud systems.",
      "Create detailed cloud architecture diagrams and documentation.",
      "Perform cloud cost optimization and monitoring.",
      "Provide guidance and mentoring to junior cloud engineers."
    ],
    requirements: [
      "5+ years of experience in cloud architecture, with expertise in AWS, GCP, or Azure.",
      "Strong knowledge of containerization (Docker, Kubernetes).",
      "Experience with serverless architecture and cloud automation tools.",
      "Proven track record of architecting large-scale cloud systems.",
      "Excellent communication and leadership skills."
    ],
    benefits: [
      "Competitive salary with performance-based bonuses.",
      "Flexible remote working options.",
      "Comprehensive health and dental benefits.",
      "Generous paid time off and professional development resources."
    ],
    requiredSkills: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Cloud Automation"
    ],
    aboutCompany: "CloudMasters is a leading provider of cloud-based solutions, helping enterprises build scalable, secure, and cost-effective cloud infrastructures.",
    image: img9
  }

];

export default jobs;
