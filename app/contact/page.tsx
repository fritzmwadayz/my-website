export default function Contact() {
  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <div className="space-y-8">
        <p className="text-lg text-secondary leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to be part of your vision. I am open to volunteering as well.
          Feel free to reach out through any of the channels below.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-accent">✉️</span>
            <div>
              <h3 className="font-medium">Email</h3>
              <a 
                href="mailto:mwadayz@yandex.com"
                className="text-secondary hover:text-accent transition-colors"
              >
                mwadayz@yandex.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-accent">💼</span>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/mwadayz"
                className="text-secondary hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mwadayz
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-accent">✈️</span>
            <div>
              <h3 className="font-medium">Telegram</h3>
              <a 
                href="https://t.me/fritzmwadayz"
                className="text-secondary hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @fritzmwadayz
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-secondary leading-relaxed">
            Whether you have a project in mind, a question about my work, 
            or just want to say hello, I'll get back to you as soon as 
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}