export default function Home() {
  return (
    <div className="page-container">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Hello there, I'm <span className="text-accent">Mwadime</span>
        </h1>
        
        <p className="text-xl text-secondary leading-relaxed">
          I'm a computer scientist who likes building things from first principles including
          search engines, puzzle solvers, and small tools that do one job well. I mostly work with
          Python, currently learning C and Assembly.
        </p>
        
        <div className="pt-8 space-y-4">
          <h2 className="section-title">What I Do</h2>
          <div className="grid gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-2">Algorithms & Systems</h3>
              <p className="text-secondary text-sm">
                Implementing search and solving algorithms from scratch: inverted indexes,
                constraint propagation, and the data structures underneath them.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-2">Backend & Tooling</h3>
              <p className="text-secondary text-sm">
                Building CLIs, REPLs, and lightweight APIs in Python with FastAPI,
                and starting to move closer to the metal with C.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <h2 className="section-title">Currently</h2>
          <p className="text-secondary">
            Building a lexicon editor to help compile a Taita-language dictionary,
            with a chess engine, a download manager, and a small C interpreter/compiler
            lined up next.
          </p>
        </div>
      </section>
    </div>
  )
}