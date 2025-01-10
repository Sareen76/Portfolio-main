export const projects = [
  {
    name: "Heart Attack Risk Analysis",
    dateAdded: "2024-09-14",
    description: "A project analyzing health parameters to predict and assess heart attack risks, enabling early intervention.",
    likes: 0,
    category: "healthcare", // Links to themes.healthcare
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    githubLink: "https://github.com/username/heart-attack-risk-analysis",
    hostedLink: "https://heart-risk-analysis.example.com",
    image: "https://img.icons8.com/color/96/heart-health.jpg", // Healthcare-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "Decentralized Voting System",
    dateAdded: "2024-09-23",
    description: "A blockchain-based voting system designed to ensure transparency and security in small-scale elections.",
    likes: 0,
    category: "blockchain", // Links to themes.blockchain
    techStack: ["Solidity", "React", "Ethereum", "Node.js"],
    githubLink: "https://github.com/username/decentralized-voting-system",
    hostedLink: "https://voting-system.example.com",
    image: "https://img.icons8.com/color/96/blockchain-technology.jpg", // Blockchain-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "Medical Appointment Scheduler",
    dateAdded: "2024-09-23",
    description: "A dynamic website for scheduling medical appointments with React as the frontend and Node.js with MongoDB as the backend.",
    likes: 0,
    category: "healthcare", // Links to themes.healthcare
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    githubLink: "https://github.com/username/medical-appointment-scheduler",
    hostedLink: "https://med-scheduler.example.com",
    image: "https://img.icons8.com/color/96/doctor.jpg", // Healthcare-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "Interactive Game Streaming Platform",
    dateAdded: "2024-09-23",
    description: "A front-end platform for streaming games, providing interactive user experiences.",
    likes: 0,
    category: "gaming", // Links to themes.gaming
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    githubLink: "https://github.com/username/interactive-game-streaming",
    hostedLink: "https://game-stream.example.com",
    image: "https://img.icons8.com/color/96/game-controller.jpg", // Gaming-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "Code Snippet Collaboration Tool",
    dateAdded: "2024-10-13",
    description: "A real-time collaboration tool allowing multiple users to share and edit code snippets simultaneously.",
    likes: 0,
    category: "collaboration", // Links to themes.collaboration
    techStack: ["React", "Node.js", "Socket.IO", "Express"],
    githubLink: "https://github.com/username/code-snippet-tool",
    hostedLink: "https://code-snippet.example.com",
    image: "https://img.icons8.com/color/96/code.jpg", // Collaboration-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "Real-Time Chat Application",
    dateAdded: "2024-11-10",
    description: "A scalable chat application with real-time messaging, authentication, and authorization built using the MERN stack.",
    likes: 0,
    category: "communication", // Links to themes.communication
    techStack: ["MongoDB", "Express", "React", "Node.js", "Shadcn"],
    githubLink: "https://github.com/username/real-time-chat-app",
    hostedLink: "https://chat-app.example.com",
    image: "https://img.icons8.com/color/96/chat.jpg", // Communication-related image in JPG
    status: 1 // Completed project
  },
  {
    name: "On Progress Project",
    dateAdded: "2024-01-08",
    description: "This project is under development and aims to provide advanced features for users.",
    likes: 0,
    category: "workInProgress", // Custom category for 'On Progress'
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/on-progress-project",
    hostedLink: "https://on-progress-project.example.com",
    image: "https://via.placeholder.com/96x96?text=On+Progress", // Placeholder image for progress
    status: 0 // On Progress
  }
];

  
  

  export const themes = {
    healthcare: {
      name: "Healthcare & AI",
      image: "https://img.icons8.com/color/96/heart-health.png",
      background: "#FFDDC1" // Soft peach
    },
    blockchain: {
      name: "Blockchain",
      image: "https://img.icons8.com/color/96/blockchain-technology.png",
      background: "#CCE5FF" // Light blue
    },
    gaming: {
      name: "Gaming",
      image: "https://www.pngplay.com/wp-content/uploads/8/Video-Game-Transparent-Image.png",
      background: "#FFCCCC" // Light red
    },
    collaboration: {
      name: "Collaboration",
      image: "https://img.icons8.com/color/96/source-code.png",
      background: "#E6E6FF" // Light purple
    },
    communication: {
      name: "Communication",
      image: "https://img.icons8.com/color/96/chat.png",
      background: "#FDE2E4" // Soft pink
    },
    workInProgress: {
      name: "Work In Progress",
      image: "https://via.placeholder.com/96x96?text=On+Progress", // Placeholder image
      background: "#E0E0E0" // Gray background for "In Progress" theme
    }
  };
  
  