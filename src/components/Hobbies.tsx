'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '👞',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏋',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export function Hobbies() {
  const constraintRef = useRef(null)

  return (
    <div ref={constraintRef} className="relative flex-1">
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
          style={{
            top: hobby.top,
            left: hobby.left,
          }}
          drag
          dragConstraints={constraintRef}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  )
}
