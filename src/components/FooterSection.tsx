import FadeIn from './FadeIn'

const LINKS = [
  { label: 'Email', href: 'mailto:cuongvu.69.work@gmail.com', value: 'cuongvu.69.work@gmail.com' },
  { label: 'Telegram', href: 'https://t.me/cuongvu69', value: '@cuongvu69' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/cuongvu69', value: 'linkedin.com/in/cuongvu69' },
  { label: 'Phone', href: 'tel:+84375278069', value: '+84 375 278 069' },
]

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="pt-20 sm:pt-28 md:pt-36 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="page-container">
        {/* Big CTA heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            Let&apos;s work
            <br />
            together.
          </h2>
        </FadeIn>

        {/* Divider */}
        <div className="mt-16 sm:mt-20 mb-12 sm:mb-16 h-px bg-[#D7E2EA]/15" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-12 sm:gap-6">
          <FadeIn delay={0.1} y={20}>
            <div>
              <p
                className="text-[#D7E2EA] font-black uppercase tracking-tight leading-none"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
              >
                Cuong Vu
              </p>
              <p
                className="text-[#D7E2EA] font-light uppercase tracking-widest mt-2 opacity-50"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                Web3 Growth Builder
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <div key={link.label} className="flex items-baseline gap-4">
                  <span
                    className="text-[#D7E2EA] opacity-30 uppercase tracking-widest font-medium w-20 flex-shrink-0"
                    style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)' }}
                  >
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-[#D7E2EA] font-light hover:opacity-70 transition-opacity duration-200"
                    style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.1rem)' }}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-[#D7E2EA]/10 flex items-center justify-between">
          <p className="text-[#D7E2EA] opacity-20 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Cuong Vu. All rights reserved.
          </p>
          <p className="text-[#D7E2EA] opacity-20 text-xs uppercase tracking-widest">
            Web3 Growth Builder
          </p>
        </div>
      </div>
    </footer>
  )
}
