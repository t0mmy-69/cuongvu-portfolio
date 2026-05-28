import { useRef } from 'react'

const IMAGES = [
  '/mystic-1.png',
  '/mystic-2.png',
  '/mystic-3.png',
  '/mystic-4.png',
  '/monoswap-1.png',
  '/monoswap-2.png',
  '/monoswap-3.png',
  '/monoswap-4.png',
  '/u2u-1.png',
  '/u2u-2.png',
  '/ssid-1.png',
  '/ssid-2.png',
  '/ssid-3.png',
  '/mention-1.png',
  '/mention-2.png',
  '/mention-3.png',
  '/mention-4.png',
  '/mention-5.png',
]

const MID = Math.ceil(IMAGES.length / 2)
const ROW1 = IMAGES.slice(0, MID)
const ROW2 = IMAGES.slice(MID)

function MarqueeRow({ images, reverse }: { images: string[]; reverse?: boolean }) {
  // Duplicate 3× so the loop is seamless
  const track = [...images, ...images, ...images]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {track.map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 90s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} />
        <MarqueeRow images={ROW2} reverse />
      </div>
    </section>
  )
}
