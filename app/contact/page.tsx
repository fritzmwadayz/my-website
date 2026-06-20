export default function Contact() {
  const channels = [
    {
      label: 'email',
      value: 'mwadayz@yandex.com',
      href: 'mailto:mwadayz@yandex.com',
      external: false,
    },
    {
      label: 'linkedin',
      value: 'linkedin.com/in/mwadayz',
      href: 'https://linkedin.com/in/mwadayz',
      external: true,
    },
    {
      label: 'telegram',
      value: '@fritzmwadayz',
      href: 'https://t.me/fritzmwadayz',
      external: true,
    },
  ]

  return (
    <div className="page-container">
      <h1
        className="text-3xl font-semibold mb-8"
        style={{ fontFamily: 'var(--font-family-mono)' }}
      >
        Get in touch
      </h1>

      <div className="space-y-8">
        <p className="text-base text-secondary leading-relaxed max-w-xl">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. I am open to volunteering as well.
          Feel free to reach out through any of the channels below.
        </p>

        <div>
          {channels.map((channel, i) => (
            <div
              key={channel.label}
              className="flex items-center justify-between py-4"
              style={{
                borderBottom: '1px solid var(--color-line)',
                borderTop: i === 0 ? '1px solid var(--color-line)' : undefined,
              }}
            >
              <span
                className="text-sm text-secondary"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {channel.label}
              </span>
              
              <a
                href={channel.href}
                className="text-sm text-accent hover:underline"
                style={{ fontFamily: 'var(--font-family-mono)' }}
                {...(channel.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {channel.value}
              </a>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <h2 className="section-title">let&apos;s work together</h2>
          <p className="text-secondary leading-relaxed text-sm max-w-xl">
            Whether you have a project in mind, a question about my work,
            or just want to say hello, I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}