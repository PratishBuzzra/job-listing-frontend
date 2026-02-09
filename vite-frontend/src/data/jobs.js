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
    location: "Kathmandu, Nepal",
    tags: ["Remote", "Full-time"],
    posted: "2 days ago",
    aboutjob: "TechCorp Solutions is looking for a Senior Frontend Developer to create dynamic and responsive web applications. The role involves collaborating with cross-functional teams to deliver high-quality user interfaces and enhancing performance. You will work with modern technologies like React, Angular, or Vue to build seamless and scalable applications.",
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
    benefits: "TechCorp Solutions offers a competitive salary with performance-based bonuses. You’ll have flexible working hours, with the option to work remotely. Enjoy comprehensive health, dental, and vision insurance, along with paid time off and sick leave. There are also professional development opportunities, including access to conferences, to help you grow your career.",
    image: img1
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Studio",
    tags: ["Hybrid", "Full-time", "$120k-$150k", "entry-level"],
    
    experience: "Mid-level",
    location: "Chamati, Kathmandu",
    posted: "1 week ago",
    aboutjob: "Creative Studio is looking for a Product Designer to lead the design process for innovative digital products. This role will involve creating wireframes, prototypes, and high-fidelity mockups, while collaborating closely with engineers and product managers to bring new features to life.",
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
    benefits: "Creative Studio offers a competitive salary based on experience. You will enjoy health and wellness benefits, including mental health support and gym memberships. There is flexibility in remote work options, and the studio provides access to learning and development resources. You'll be part of a dynamic and creative team environment where innovation thrives.",
    image: img2
  },
  {
    id: 3,
    title: "UX Researcher Intern",
    company: "TechCorp Solutions",
    tags: ["On-Site", "Full-time", "Internship"],
    experience: "Fresher/Entry-level",
    location: "Kalimati, Kathmandu",
    posted: "2 days ago",
    aboutjob: "TechCorp Solutions is offering a UX Researcher Intern position where you will gain hands-on experience by conducting user research, analyzing data, and collaborating with design teams to improve product usability. This role is a great opportunity to develop your skills in research methods and contribute to meaningful product development.",
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
    benefits: "As an intern at TechCorp Solutions, you'll receive a competitive stipend along with flexible working hours. You’ll have the opportunity to work on real-world projects, gaining hands-on experience. Additionally, mentorship will be provided by experienced researchers and designers, and there will be access to resources for career development and learning.",
    image: img3
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "InnovateTech Inc.",
    tags: ["Remote", "Full-time"],
    type: "Full-time",
    experience: "2-5 years",
    location: "Pulchowk, Lalitpur",
    posted: "1 day ago",
    aboutjob: "InnovateTech Inc. is seeking a Software Engineer to join their dynamic team. As a Software Engineer, you will be responsible for designing and implementing software solutions, troubleshooting, and optimizing code to deliver high-quality and scalable applications. You will collaborate closely with cross-functional teams to ensure that the solutions meet both functional and non-functional requirements.",
    responsibilities: [
      "Design, implement, and maintain scalable software systems.",
      "Collaborate with cross-functional teams to define requirements and deliver features.",
      "Write efficient, testable, and reusable code.",
      "Troubleshoot, debug, and optimize existing systems.",
      "Ensure the software meets both functional and non-functional requirements."
    ],
    requirements: [
      "2-5 years of experience in software development.",
      "Proficiency in programming languages such as Python, Java, or C++. ",
      "Experience with database management (SQL, NoSQL).",
      "Familiarity with cloud platforms like AWS, GCP, or Azure.",
      "Strong problem-solving skills and the ability to work independently."
    ],
    benefits: "InnovateTech Inc. offers a competitive salary along with performance bonuses. You'll enjoy remote-first working flexibility, paid health insurance, and wellness programs. The company also provides opportunities for career growth and professional development, ensuring your career progresses as you grow within the company.",
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
    location: "Kalanki, Kathmandu",
    salary: "$110k-$140k",
    posted: "3 days ago",
    aboutjob: "DataVision Solutions is hiring a Data Scientist to analyze complex data sets and provide actionable insights to drive business decisions. The ideal candidate will use statistical methods and machine learning algorithms to build predictive models, automating data processing and creating clear data visualizations.",
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
    benefits: "At DataVision Solutions, you will receive a competitive salary along with performance-based bonuses. The company offers flexible working hours and the option to work remotely. Enjoy health and dental insurance, along with a generous PTO policy and paid holidays. The company also provides a learning and development stipend to help advance your skills and career.",
   
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
    location: "Nayabazar, Kathmandu",
    posted: "1 week ago",
    aboutjob: "DevTech Labs is looking for an experienced Backend Developer to design and implement scalable backend systems for web applications. The ideal candidate will have a strong understanding of RESTful APIs, cloud platforms, and backend frameworks, collaborating closely with frontend teams to ensure seamless integration.",
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
    benefits: "DevTech Labs offers a competitive salary and performance bonuses. Enjoy remote-first flexibility with flexible hours, paid health insurance, wellness programs, and career growth opportunities. You’ll also have access to learning resources to advance your skills and career.",
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
    location: "Kamladi. Kathmandu",
    posted: "4 days ago",
    aboutjob: "MarketGenius is looking for a Digital Marketing Manager to develop and execute digital marketing campaigns that increase brand awareness and engagement. This role involves managing social media, paid advertising, and content marketing, with a focus on data-driven strategies to optimize performance.",
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
    benefits: "MarketGenius offers a competitive salary with bonus opportunities. You’ll enjoy health and dental insurance, along with remote work flexibility in a collaborative team environment. Additionally, the company provides access to online learning resources and courses for your continued growth.",
    
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
    location: "NewRoad, Kathmandu",
    posted: "1 day ago",
    aboutjob: "TechTonic Studios is hiring a Full Stack Developer to work on end-to-end development of web applications. You will build scalable systems using JavaScript (React, Node.js), databases, and work closely with product and design teams to create high-quality user experiences.",
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
    benefits: "TechTonic Studios offers a competitive salary with annual bonuses, along with a flexible hybrid work model. You'll also receive paid health and wellness benefits, along with opportunities for professional growth and development.",
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
    location: "Chakupat, Lalitpur",
    posted: "2 days ago",
    aboutjob: "CloudMasters is looking for a Cloud Solutions Architect to lead the design and implementation of cloud infrastructure solutions on AWS, GCP, or Azure. The ideal candidate will have extensive experience with cloud architecture, containerization, and automation tools to help deliver scalable and secure cloud systems.",
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
    benefits: "CloudMasters offers a competitive salary with performance-based bonuses. Enjoy flexible remote working options, comprehensive health and dental benefits, and generous paid time off. Additionally, the company provides professional development resources to support your career growth.",
  
    aboutCompany: "CloudMasters is a leading provider of cloud-based solutions, helping enterprises build scalable, secure, and cost-effective cloud infrastructures.",
    image: img9
  }
];

export default jobs;
