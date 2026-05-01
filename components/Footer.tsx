export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center text-sm text-secondary">
          <p>© {new Date().getFullYear()} Mwadime</p>
          <div className="flex gap-4">
            <a href="https://github.com/fritzmwadayz" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/mwadayz" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}