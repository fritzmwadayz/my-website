export default function Home() {
  return (
    <div className="page-container">
      <section className="space-y-6">
        <p
          className="text-xs text-accent mb-2"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          <span className="text-secondary">$ </span>whoami
        </p>

        <h1
          className="text-4xl font-semibold tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          Mwadime<span className="text-accent">.</span> Building things out
          of curiosity.
        </h1>

        <p className="text-lg text-secondary leading-relaxed max-w-xl">
          Computer scientist working mostly with{' '}
          <code
            className="text-accent px-1.5 py-0.5 rounded text-sm"
            style={{ fontFamily: 'var(--font-family-mono)', background: 'var(--color-accent-soft)' }}
          >
            python
          </code>
          , currently learning {' '}
          <code
            className="text-accent px-1.5 py-0.5 rounded text-sm"
            style={{ fontFamily: 'var(--font-family-mono)', background: 'var(--color-accent-soft)' }}
          >
            C
          </code>{' '}
          and{' '}
          <code
            className="text-accent px-1.5 py-0.5 rounded text-sm"
            style={{ fontFamily: 'var(--font-family-mono)', background: 'var(--color-accent-soft)' }}
          >
            assembly
          </code>
          . I write small tools that do things well, (sometimes).
        </p>

        <div className="pt-10 space-y-4">
          <h2 className="section-title">what i do</h2>
          <div
            className="grid sm:grid-cols-2 gap-px"
            style={{ background: 'var(--color-line)', border: '1px solid var(--color-line)' }}
          >
            <div className="p-5" style={{ background: 'var(--color-page-bg)' }}>
              <h3
                className="font-semibold mb-2 text-sm flex items-baseline gap-2"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                <span className="text-accent">01</span> Algorithms &amp; systems
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Inverted indexes, constraint propagation, and the data
                structures underneath them; implemented from scratch.
              </p>
            </div>

            <div className="p-5" style={{ background: 'var(--color-page-bg)' }}>
              <h3
                className="font-semibold mb-2 text-sm flex items-baseline gap-2"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                <span className="text-accent">02</span> Backend &amp; tooling
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                CLIs, REPLs, and lightweight APIs in Python with FastAPI.
                Moving closer to the metal with C.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <h2 className="section-title">currently</h2>
          <p
            className="text-secondary text-sm leading-loose"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            <span className="text-accent">&gt;</span> building a chess engine from
            scratch
            <br />
            <span className="text-accent">&gt;</span> next up: download manager, C interpreter
          </p>
        </div>
      </section>
    </div>
  )
}