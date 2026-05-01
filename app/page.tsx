export default function Home() {
  return (
    <div className="page-container">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Hello there, I'm <span className="text-accent">Mwadime</span>
        </h1>
        
        <p className="text-xl text-secondary leading-relaxed">
          I'm a computer scientist and software developer passionate about building clean, 
          performant applications. I focus on creating great user 
          experiences with modern technologies.
        </p>
        
        <div className="pt-8 space-y-4">
          <h2 className="section-title">What I Do</h2>
          <div className="grid gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-2">Web Development</h3>
              <p className="text-secondary text-sm">
                Building responsive, accessible web applications using Vue.js, React, 
                Next.js, and modern CSS frameworks.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium mb-2">Backend Systems</h3>
              <p className="text-secondary text-sm">
                Designing and implementing scalable APIs and database 
                architectures with FastAPI, Node.js and TypeScript.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <h2 className="section-title">Currently</h2>
          <p className="text-secondary">
            Working on personal projects and open to new opportunities.
          </p>
        </div>
      </section>
    </div>
  )
}