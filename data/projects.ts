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
  {
    title: 'Lexicon editor',
    description:
      'A terminal UI for curating a Taita-language dictionary sourced from a parallel Taita/Swahili/English Bible corpus. Built around a SQLite-backed data model with four tables — entries, variations, examples, and a full edit_history audit trail. The editor handles orthographic normalization (correcting inconsistent transcription of non-Latin sounds), dialect-tagged variation forms, structured verse references, and status-workflow tracking (pending → reviewed → complete → flagged) per entry. Built with Textual.',
    technologies: ['python', 'textual', 'sqlite'],
    status: 'stable',
    github: 'https://github.com/fritzmwadayz/lexicon-editor',
  },
  {
    title: 'Chess engine',
    description:
      'A chess engine being built from scratch in Python. The board is represented as a 64-element integer array with a signed piece encoding (positive white, negative black). The position struct tracks side-to-move, castling rights, en passant square, half/full move counters, and a move history — with three-fold repetition detection implemented via position hashing from the start.',
    technologies: ['python'],
    status: 'active',
    github: 'https://github.com/fritzmwadayz/chess-engine',
  },
]