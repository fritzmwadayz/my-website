export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "Lola: A File Search Engine",
    description: "A local file search engine built around an inverted index. Tokenizes and indexes file titles (or full content, optionally) for .txt, .md, .csv, .pdf, and .docx files, then resolves queries with Boolean AND retrieval — intersecting postings lists across query terms. Ships as a CLI, an interactive REPL, and a FastAPI web UI.",
    technologies: ["Python", "FastAPI"],
    github: "https://github.com/fritzmwadayz/lola",
  },
  {
    title: "Sudoku Solver",
    description: "A Sudoku solver using constraint propagation (AC-3 style arc consistency) to prune candidate values across rows, columns, and boxes before search, rather than relying on brute-force backtracking alone. Includes a fetcher that pulls live puzzles from a Sudoku site/API to solve.",
    technologies: ["Python"],
    github: "https://github.com/fritzmwadayz/sudoku-solver",
  },
]