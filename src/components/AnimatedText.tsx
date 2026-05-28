import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const totalChars = text.length
  const words = text.split(' ')

  let charIndex = 0

  return (
    <p ref={ref} className={className} style={{ ...style }}>
      {words.map((word, wi) => {
        const wordStart = charIndex
        charIndex += word.length + (wi < words.length - 1 ? 1 : 0)

        return (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => {
              const idx = wordStart + ci
              const start = idx / totalChars
              const end = (idx + 1) / totalChars
              return (
                <AnimatedChar
                  key={ci}
                  char={char}
                  start={start}
                  end={end}
                  scrollYProgress={scrollYProgress}
                />
              )
            })}
            {wi < words.length - 1 && (
              <span style={{ display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        )
      })}
    </p>
  )
}

function AnimatedChar({
  char,
  start,
  end,
  scrollYProgress,
}: {
  char: string
  start: number
  end: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  )
}
