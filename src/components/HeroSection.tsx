import Magnet from './Magnet'
import ContactButton from './ContactButton'
import FadeIn from './FadeIn'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip', position: 'relative' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <div className="w-full page-container pt-6 md:pt-8">
          <nav className="flex justify-between items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={link === 'Skills' ? '#skills' : `#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40}>
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center
            text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]
            mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, I&apos;m CuongVu
        </h1>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex-1 flex items-end pb-7 sm:pb-8 md:pb-10" style={{ marginBottom: '2.5rem' }}>
        <div className="w-full page-container pr-6 md:pr-10 flex justify-between items-end">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
                max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a web3 growth builder scaling projects from zero to traction
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait — centered */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="/avatar.png"
            alt="Cuong Vu portrait"
            className="w-full h-auto"
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
