export interface Project {
  title: string
  description: string
  technologies: string[]
  status: 'stable' | 'active'
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: 'Lola: a file search engine',
    description:
      'A local file search engine built around an inverted index. Tokenizes and indexes file titles — or full content, optionally — for .txt, .md, .csv, .pdf, and .docx files, then resolves queries with Boolean AND retrieval — intersecting postings lists across query terms. Ships as a CLI, an interactive REPL, and a FastAPI web UI.',
    technologies: ['python', 'fastapi'],
    status: 'stable',
    github: 'https://github.com/fritzmwadayz/lola',
  },
  {
    title: 'Sudoku solver',
    description:
      'A Sudoku solver using constraint propagation (AC-3 style arc consistency) to prune candidate values across rows, columns, and boxes before search, rather than relying on brute-force backtracking alone. Includes a fetcher that pulls live puzzles from a Sudoku site/API to solve.',
    technologies: ['python'],
    status: 'stable',
    github: 'https://github.com/fritzmwadayz/sudoku-solver',
  },
]