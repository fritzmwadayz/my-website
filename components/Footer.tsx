export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-line)' }}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div
          className="flex justify-between items-center text-xs text-secondary"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          <p>© {new Date().getFullYear()} mwadime</p>
          <div className="flex gap-5">
            <a href="https://github.com/fritzmwadayz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              github
            </a>
            <a href="https://linkedin.com/in/mwadayz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              linkedin
            </a>
            <a href="https://t.me/fritzmwadayz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}