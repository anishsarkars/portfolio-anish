import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samiksha Shukla",
  initials: "SS",
  url: "https://github.com/samiksha0shukla",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "AI/ML Engineer with hands-on experience building scalable AI agents, automation systems, and workflow tools. I specialise in Machine Learning, Deep Learning, NLP, and backend development with Python and FastAPI.",
  summary:
    "AI/ML Engineer passionate about building intelligent systems. Currently working on multi-agent workflows and building [ContextMemory](https://github.com/samiksha0shukla/context-memory) — a memory system for AI applications. I specialise in Machine Learning, Deep Learning, NLP, and backend development with Python and FastAPI.",
  avatarUrl: "/me.png",
  skills: [
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "Agentic AI",
    "Multi-agent Workflows",
    "Langchain",
    "LangGraph",
    "Pydantic AI",
    "LangSmith",
    "Giskard",
    "RAGs",
    "Memory Systems",
    "FastAPI",
    "SQLAlchemy",
    "Pydantic",
    "Streamlit",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "samiksha.shukla@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/samiksha0shukla",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samiksha-shukla-7b2207217/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Samiksha2908",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Computer Market Hub",
      href: "https://computermarkethub.com",
      badges: [],
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: "/cmhlogo.jpeg",
      start: "August 2024",
      end: "December 2024",
      description:
        "• Spearheaded Jess chatbot for Jessup Cellars, achieving 78% user satisfaction through testing optimization\n• Orchestrated data pipelines processing 2K+ daily data points, improving model performance by 40%\n• Architected AI sentiment analysis system processing 5K+ Hebrew posts with 87% translation accuracy\n• Collaborated with teams to deliver 3 specialized AI agents, reducing manual processing time by 35%",
    },
    {
      company: "Munshot",
      badges: [],
      href: "https://munshot.com",
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: "/munshotlogo.png",
      start: "August 2025",
      end: "September 2025",
      description:
        "• Developed an AI agent for a Singapore-based financial services client for automated information retrieval and task execution\n• Worked with multi-agent AI workflows, contributing to context-sharing and coordination between agents\n• Designed prompting logic including system prompts and instructions for task execution\n• Collaborated with the team to test, debug, and refine the agent's performance while documenting the development process",
    },
  ],
  education: [
    {
      school: "Baderia Global Institute of Engineering and Management",
      href: "https://bgiem.ac.in",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/RGPVLOGO.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "ContextMemory",
      href: "https://github.com/samiksha0shukla/context-memory",
      //dates: "2024 - Present",
      active: true,
      description:
        "• Enables AI applications to remember context across conversations\n• Automatically extracts and stores important facts from conversations\n• Uses semantic search to retrieve relevant context when needed\n• Handles deduplication and contradictions intelligently\n• Production-ready with SQLite/PostgreSQL support\n• Available as an open-source pip package on PyPI",
      technologies: [
        "Python",
        "OpenAI",
        "PostgreSQL",
        "Semantic Search",
        "Vector Database",
        "RAG",
        "Graph DB",
        "PyPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/contextmemory/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/context-memory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AIxAI",
      href: "https://github.com/samiksha0shukla/AIxAI",
      //dates: "2024",
      active: true,
      description:
        "• MCP-powered system that generates Pydantic AI agents\n• Uses multi-agent LangGraph workflow for intelligent processing\n• Crawls and chunks documentation automatically\n• Stores data in Supabase with OpenAI embeddings\n• Provides semantic search and RAG-based answers\n• Preserves code blocks and integrates with AI IDEs",
      technologies: [
        "Agentic AI",
        "MultiAgent Workflow",
        "Pydantic AI",
        "LangGraph",
        "Supabase",
        "Agentic RAG",
        "MCP",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://aixai-mkfm.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/AIxAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HomeSage",
      href: "https://github.com/samiksha0shukla/HomeSage",
      //dates: "2024",
      active: true,
      description:
        "Your Smart Companion for Real Estate Price Prediction, Analytics, and Recommendations. A comprehensive real estate platform that leverages machine learning for accurate price predictions and personalized property recommendations.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analytics",
        "Data Visualization",
        "Data Engineering",
        "Feature Engineering",
        "EDA",
        "Prediction Models",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/HomeSage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "n8n",
      href: "https://github.com/samiksha0shukla/n8n",
      //dates: "2024",
      active: true,
      description:
        "A visual workflow automation platform inspired by n8n, built with React and FastAPI, enabling users to design, connect, and automate workflows in real time. Features a drag-and-drop interface for creating complex automation pipelines.",
      technologies: [
        "React",
        "FastAPI",
        "Pydantic",
        "SQLAlchemy",
        "Python",
        "Workflow Automation",
        "Real-time",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/n8n",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Transformers Research",
      href: "https://arxiv.org/pdf/1706.03762",
      active: true,
      description:
        "• Deep dive into 'Attention Is All You Need' paper\n• Implementing transformer architecture from scratch\n• Studying self-attention mechanisms and positional encodings\n• Exploring applications in NLP and beyond\n• Ongoing research and experimentation",
      technologies: [
        "PyTorch",
        "Transformers",
        "Self-Attention",
        "NLP",
        "Deep Learning",
        "Research",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/pdf/1706.03762",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tiny Recursive Model",
      href: "https://arxiv.org/pdf/2510.04871",
      active: true,
      description:
        "• Researching efficient recursive model architectures\n• Studying parameter-efficient approaches for LLMs\n• Exploring recursive computation in neural networks\n• Investigating memory and compute optimization\n• Active research in progress",
      technologies: [
        "PyTorch",
        "LLMs",
        "Model Optimization",
        "Recursive Networks",
        "Deep Learning",
        "Research",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/pdf/2510.04871",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon (SIH)",
      dates: "August 25th - 26th, 2022",
      location: "India",
      description:
        "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
      image: "/SIH2.webp",
      links: [],
    },
    {
      title: "Hack JKLU",
      dates: "March 3rd - 4th, 2023",
      location: "India",
      description:
        "Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation. Built a secure digital vault solution leveraging blockchain technology for enhanced data protection.",
      image: "/jklulogo.jpg",
      win: "3rd Place Winner",
      links: [],
    },
  ],
} as const;
