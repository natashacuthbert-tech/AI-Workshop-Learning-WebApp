export const speakers = [
  {
    id: "evans-kipchumba",
    name: "Prof. Evans Kipchumba",
    title: "Professor of AI & Machine Learning",
    organization: "JKUAT / JHUB Africa",
    sessionTopic: "Algorithms for Responsible Research",
    tags: ["Algorithms", "Responsible AI", "Evaluation"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    biography:
      "Prof. Evans Kipchumba focuses on advanced machine learning systems and evaluation methods for AI research. His work emphasizes reliability, fairness, and practical benchmarking.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/",
      scholar: "https://scholar.google.com/",
    },
  },
  {
    id: "zawadi-omwamba",
    name: "Zawadi Omwamba",
    title: "Data Scientist",
    organization: "AI Innovation Lab",
    sessionTopic: "Datasets that Scale: From Labels to Lifecycles",
    tags: ["Datasets", "NLP", "Data Engineering"],
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    biography:
      "Zawadi builds dataset pipelines for modern ML systems, including quality controls, versioning, and data governance practices for production-grade learning.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/",
      scholar: "https://scholar.google.com/",
    },
  },
  {
    id: "tariq-amina",
    name: "Dr. Tariq Amina",
    title: "Research Scientist",
    organization: "University Research Group",
    sessionTopic: "Methodologies for Reproducible AI",
    tags: ["Methodologies", "Reproducibility", "Benchmarking"],
    image:
      "https://images.unsplash.com/photo-1552053831-b7d8bbf09a1b?auto=format&fit=crop&w=600&q=80",
    biography:
      "Dr. Tariq Amina works on reproducible research workflows and robust evaluation strategies for AI models across domains. She advocates for transparent methods and open artifacts.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/",
      scholar: "https://scholar.google.com/",
    },
  },
  {
    id: "agnes-mutua",
    name: "Dr. Agnes Mutua",
    title: "Industry ML Engineer",
    organization: "Applied AI Systems",
    sessionTopic: "Real Applications: Turning Research into Products",
    tags: ["Real Applications", "Industry", "Deployment"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    biography:
      "Dr. Agnes Mutua bridges the gap between research and industry. Her session explores design patterns for scalable ML systems, from monitoring to continuous improvement.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/",
      scholar: "https://scholar.google.com/",
    },
  },
  {
    id: "benji-ndolo",
    name: "Benji Ndolo",
    title: "Research Engineer",
    organization: "JHUB Africa",
    sessionTopic: "AI-driven Innovation for Sustainable Impact",
    tags: ["AI-driven Innovation", "Sustainability", "Experiments"],
    image:
      "https://images.unsplash.com/photo-1541746979285-5c0bf3b2a0d8?auto=format&fit=crop&w=600&q=80",
    biography:
      "Benji Ndolo builds research tooling and experiments for AI-driven innovation, emphasizing measurable outcomes and community-driven deployments.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/",
      scholar: "https://scholar.google.com/",
    },
  },
];

export const scheduleSessions = [
  {
    id: "d1-keynote-1",
    day: 1,
    time: "09:00 - 10:15",
    type: "Keynote",
    track: "Keynote",
    title: "Opening Keynote: AI Research Workshop 2026",
    speakerId: "evans-kipchumba",
    location: "JHUB Africa Auditorium",
    description:
      "Kickoff keynote on state-of-the-art research directions and practical evaluation.",
  },
  {
    id: "d1-workshop-1",
    day: 1,
    time: "10:30 - 12:30",
    type: "Workshop",
    track: "Workshop",
    title: "Hands-on Lab: Building Reproducible ML Pipelines",
    speakerId: "tariq-amina",
    location: "Lab Room A",
    description:
      "A guided lab focusing on experiment tracking, datasets, and reproducibility checks.",
  },
  {
    id: "d1-panel-1",
    day: 1,
    time: "13:30 - 14:30",
    type: "Panel",
    track: "Panel",
    title: "Panel: From Algorithms to Real Applications",
    speakerId: "agnes-mutua",
    location: "JHUB Africa Auditorium",
    description:
      "Industry and research perspectives on turning AI research into deployed solutions.",
  },
  {
    id: "d1-break-1",
    day: 1,
    time: "14:30 - 15:00",
    type: "Break",
    track: "Break",
    title: "Break / Networking",
    speakerId: null,
    location: "Foyer",
    description: "Coffee break and networking.",
  },
  {
    id: "d1-workshop-2",
    day: 1,
    time: "15:00 - 16:30",
    type: "Workshop",
    track: "Workshop",
    title: "Dataset Quality & Versioning for NLP",
    speakerId: "zawadi-omwamba",
    location: "Lab Room B",
    description:
      "Learn practical dataset curation techniques for NLP use cases.",
  },

  {
    id: "d2-keynote-1",
    day: 2,
    time: "09:00 - 10:00",
    type: "Keynote",
    track: "Keynote",
    title: "AI-driven Innovation for Sustainable Impact",
    speakerId: "benji-ndolo",
    location: "JHUB Africa Auditorium",
    description:
      "How to build AI products responsibly with measurable community outcomes.",
  },
  {
    id: "d2-panel-1",
    day: 2,
    time: "10:15 - 11:15",
    type: "Panel",
    track: "Panel",
    title: "Panel: Responsible Research & Evaluation",
    speakerId: "evans-kipchumba",
    location: "JHUB Africa Auditorium",
    description:
      "Evaluation strategies, bias mitigation, and transparent reporting.",
  },
  {
    id: "d2-break-1",
    day: 2,
    time: "11:15 - 11:45",
    type: "Break",
    track: "Break",
    title: "Break",
    speakerId: null,
    location: "Foyer",
    description: "Short break.",
  },
  {
    id: "d2-workshop-1",
    day: 2,
    time: "12:00 - 14:00",
    type: "Workshop",
    track: "Workshop",
    title: "Real-world AI Deployment Patterns",
    speakerId: "agnes-mutua",
    location: "Lab Room A",
    description:
      "Deploying models with monitoring, drift checks, and continuous evaluation.",
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "A Practical Guide to Reproducible AI Research",
    excerpt:
      "Learn experiment tracking, dataset versioning, and evaluation frameworks used in modern research workflows.",
    body:
      "Reproducibility is the backbone of trustworthy AI. This guide walks through structured experiment management, dataset lifecycle practices, and evaluation checklists.",
    tags: ["Methodologies", "Reproducibility", "ResearchOps"],
    author: "JHUB Africa Team",
    date: "2026-01-20",
    resources: [
      { name: "Reproducibility Checklist (PDF)", url: "#" },
      { name: "Experiment Tracking Template (ZIP)", url: "#" },
    ],
    comments: [
      {
        id: "c1",
        author: "Amina",
        text: "Great overview—especially the evaluation checklist.",
        replies: [
          { id: "r1", author: "JHUB Africa Team", text: "Thanks! Glad it helps." },
        ],
      },
    ],
  },
  {
    id: "post-2",
    title: "Datasets that Scale: Quality, Governance & NLP",
    excerpt:
      "From labels to versioning: build dataset pipelines designed for growth and consistency.",
    body:
      "This article covers dataset quality gates, annotation guidelines, version control, and governance approaches for NLP and beyond.",
    tags: ["Datasets", "NLP", "Data Engineering"],
    author: "Zawadi Omwamba",
    date: "2026-02-04",
    resources: [
      { name: "Annotation Guidelines (DOCX)", url: "#" },
    ],
    comments: [],
  },
];

