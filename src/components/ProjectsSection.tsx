import FadeIn from './FadeIn'

const PROJECTS = [
  {
    num: '01',
    name: 'Mystic Treasure',
    category: 'GameFi · May 2022 – Sep 2023',
    desc: '151K+ participants · 57K NFTs minted · 40K X followers',
    bullets: [
      'Built and managed multi-channel communities: 40K+ X followers, 19K+ Discord members, 17K+ Telegram members.',
      'Executed acquisition campaigns reaching 151K+ participants.',
      'Facilitated 57K NFT mints and 13.3K NFT staking.',
      'Led large-scale Web3 campaigns: Galxe (67K participants, 10K NFTs minted in 10 minutes), SoQuest (32K participants).',
      'Managed Discord & Telegram moderation, bot automation, and engagement activities.',
      'Monitored engagement KPIs and optimized content for higher interaction rates.',
    ],
    img1: '/mystic-1.png',
    img2: '/mystic-2.png',
    logos: ['/logo-mystic.png'],
  },
  {
    num: '02',
    name: 'Mono Swap',
    category: 'DeFi / AMM · Dec 2023 – Aug 2024',
    desc: '$2.3M TVL · 100K+ X followers · Runner-up Blast BigBang',
    bullets: [
      'Scaled community ecosystem: 100K+ X followers, 60K+ Discord members, 40K+ Telegram members.',
      'Increased Testnet DAU to 9K+ daily active users.',
      'Supported protocol growth to $2.3M TVL and $1M daily trading volume.',
      'Created educational and campaign content to onboard DeFi users.',
      'Maintained consistent posting schedules and moderated community discussions.',
      'Coordinated cross-marketing campaigns with ecosystem partners.',
      'Runner-Up – Blast BigBang Competition.',
    ],
    img1: '/monoswap-1.png',
    img2: '/monoswap-2.png',
    logos: ['/logo-monoswap.png'],
  },
  {
    num: '03',
    name: 'U2U Network',
    category: 'Layer-1 Blockchain · Sep 2024 – Oct 2025',
    desc: '1.6M+ users · 100K DAU · 1M+ DEX transactions',
    bullets: [
      'Developed growth strategies for ecosystem expansion and user acquisition.',
      'Scaled DePIN Alliance to 1.6M+ users, 100K DAU, and 1M MAU through structured campaigns and community activation programs.',
      'Supported GroFi DEX testnet growth: 100K+ wallets, 1M+ transactions via quest-based and social-driven campaigns.',
      'Collaborated cross-functionally with product, content, and community teams to align messaging and campaign rollout.',
      'Monitored engagement metrics and optimized growth performance based on user behavior insights.',
    ],
    img1: '/u2u-1.png',
    img2: '/u2u-2.png',
    logos: ['/logo-u2u.png', '/logo-grofidex.png', '/logo-x721.png', '/logo-depinalliance.png'],
  },
  {
    num: '04',
    name: 'SSID – CEX',
    category: 'Centralized Exchange · Jun 2025 – Oct 2025',
    desc: 'End-to-end marketing strategy · User lifecycle optimization',
    bullets: [
      'Built and managed relationships with KOLs and influencers to scale brand awareness and community growth.',
      'Led end-to-end marketing strategy planning for a CEX, focusing on scalable user acquisition and long-term retention.',
      'Designed and executed growth campaigns: referral programs, trading competitions, incentive mechanisms, and onboarding flows.',
      'Built and optimized user lifecycle journeys (activation → engagement → retention) through targeted campaigns, CRM flows, and personalized user experiences.',
      'Developed campaign frameworks to re-engage inactive users and improve retention across key segments.',
    ],
    img1: '/ssid-1.png',
    img2: '/ssid-2.png',
    logos: ['/logo-ssid.png'],
  },
  {
    num: '05',
    name: 'Mention Network',
    category: 'Decentralized AI Visibility · Oct 2025 – Feb 2026',
    desc: '15K+ installs · 1.5M+ prompts analyzed · 1,200+ AI Visibility Reports',
    bullets: [
      'Led a team of 3 and developed standardized, AI-assisted workflows across growth functions: social content, SEO, partnerships, and AI Visibility Reports.',
      'Tracked and evaluated team performance using key metrics: installs, DAU, prompts analyzed, SEO rankings, social reach, impressions, and engagement rate.',
      'Drove 15K+ installs, 1.5M+ prompts analyzed, and 1,200+ AI Visibility Reports within 2 months.',
      'Designed the Mention Voyage mechanism, Earn Dashboard UI, and marketing assets for social campaigns.',
      'Built and managed relationships with KOLs and influencers to scale brand awareness and community growth.',
      'Executed and monitored multi-platform airdrop campaigns across X, Galxe, and Telegram.',
    ],
    img1: '/mention-5.png',
    img2: '/mention-2.png',
    logos: ['/logo-mention.png'],
  },
  {
    num: '06',
    name: 'Lab3 Lab',
    category: 'Builder · Jan 2026 – Apr 2026',
    desc: 'AI-assisted cross-functional workflows · On-chain data automation',
    bullets: [
      'Leveraged Claude Code to streamline cross-functional collaboration between marketing and engineering teams via GitHub (issue tracking & pull requests), while contributing to new product feature development.',
      'Automated content planning, copywriting, and social media publishing workflows using Paperclip (open-source orchestration platform).',
      'Built automated on-chain data scraping pipelines with OpenClaw to detect whale activity and generate actionable insights for product development.',
    ],
    img1: null,
    img2: null,
    logos: ['/logo-lab3.png'],
  },
]

type Project = typeof PROJECTS[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasImages = project.img1 && project.img2
  return (
    <FadeIn delay={index * 0.1} y={40}>
      <div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]"
        style={{ background: '#0C0C0C', marginBottom: '3rem', padding: '2rem 3rem' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-[#D7E2EA] uppercase tracking-wider text-xs opacity-60">{project.category}</p>
              <p className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </p>
              <p className="text-[#D7E2EA] text-xs sm:text-sm opacity-50 mt-1">{project.desc}</p>
            </div>
          </div>

          {project.logos.length > 0 && (
            <div className="flex items-center gap-3 flex-shrink-0">
              {project.logos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="object-contain"
                  style={{ height: 'clamp(28px, 4vw, 52px)', maxWidth: '120px' }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className={`flex gap-6 sm:gap-8`}>
          {/* Text */}
          <div
            className="flex flex-col justify-center gap-3"
            style={{ width: hasImages ? '45%' : '100%' }}
          >
            {project.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-[#D7E2EA] opacity-40 mt-1 flex-shrink-0">—</span>
                <p
                  className="text-[#D7E2EA] font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)', opacity: 0.8 }}
                >
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          {/* Images */}
          {hasImages && (
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '55%' }}>
              <img
                src={project.img1!}
                alt=""
                className="w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] object-contain"
              />
              <img
                src={project.img2!}
                alt=""
                className="w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <div className="page-container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.num} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
