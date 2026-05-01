export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "Weather-Based Pest And Disease Alert",
    description: "A full-stack application that send email alerts on possible pest and disease attacks based on weather.",
    technologies: ["Vue.js", "JavaScript", "SQLite", "Flask"],
    github: "https://github.com/yourusername/project",
  },
  {
    title: "Lola: A Simple Search Engine",
    description: "A program that indexes the location of files on the local machine and helps you find them quickly when you need them",
    technologies: ["Python3", "FastAPI", "TypeScript", "Next.js"],
    github: "https://github.com/fritzmwadayz/lola",
  },
]