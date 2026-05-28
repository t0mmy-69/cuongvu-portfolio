import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Community Growth',
    desc: 'Building and scaling online communities from zero to millions across DeFi, GameFi, and Web3 ecosystems through engagement campaigns, moderation, and bot automation.',
  },
  {
    num: '02',
    name: 'Product Growth',
    desc: 'Driving user acquisition, retention, and feature ideation to scale Web3 products. Translating on-chain data and user behavior into actionable growth loops.',
  },
  {
    num: '03',
    name: 'Campaign Execution',
    desc: 'Designing and running multi-platform airdrop and quest campaigns across X, Discord, Telegram, Galxe, and SoQuest — from referral programs to trading competitions.',
  },
  {
    num: '04',
    name: 'KOL & Partnerships',
    desc: 'Building and managing relationships with KOLs, influencers, and ecosystem partners to scale brand awareness, community growth, and cross-marketing initiatives.',
  },
  {
    num: '05',
    name: 'Growth Strategy',
    desc: 'Developing data-driven growth strategies with KPI tracking across DAU, MAU, engagement rate, and social reach — turning insights into scalable acquisition funnels.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] py-20 sm:py-24 md:py-32"
    >
      <div className="page-container">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-left text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        <div>
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 0.1} y={30}>
              <div
                className="grid items-center py-8 sm:py-10 md:py-12"
                style={{
                  gridTemplateColumns: 'clamp(4.5rem, 15vw, 210px) 1fr',
                  gap: '1.5rem',
                  borderBottom: '1px solid rgba(12,12,12,0.15)',
                  borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                }}
              >
                <span
                  className="font-black text-[#0C0C0C] leading-none text-left justify-self-start"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {svc.num}
                </span>
                <div className="flex flex-col justify-center pt-2">
                  <p
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {svc.name}
                  </p>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
