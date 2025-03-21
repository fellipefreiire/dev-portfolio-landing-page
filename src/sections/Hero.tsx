import Image from 'next/image'
import memojiImage from '@/assets/memoji-computer.png'
import { ArrowDown } from 'lucide-react'
import grainImage from '@/assets/grain.jpg'
import StarIcon from '@/assets/star.svg'
import SparkleIcon from '@/assets/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit'

const starOrbits = [
  {
    size: 12,
    containerSize: 550,
    rotation: 20,
    shouldOrbit: true,
    orbitDuration: 38,
    shouldSpin: true,
    spinDuration: 6,
  },
  {
    size: 8,
    containerSize: 590,
    rotation: 98,
    shouldOrbit: true,
    orbitDuration: 40,
    shouldSpin: true,
    spinDuration: 6,
  },
  {
    size: 28,
    containerSize: 800,
    rotation: -72,
    shouldOrbit: true,
    orbitDuration: 48,
    shouldSpin: true,
    spinDuration: 6,
  },
]

const sparkleOrbits = [
  {
    size: 8,
    containerSize: 430,
    rotation: -14,
    shouldOrbit: true,
    orbitDuration: 30,
    shouldSpin: true,
    spinDuration: 3,
  },
  {
    size: 5,
    containerSize: 440,
    rotation: 79,
    shouldOrbit: true,
    orbitDuration: 32,
    shouldSpin: true,
    spinDuration: 3,
  },
  {
    size: 10,
    containerSize: 530,
    rotation: 178,
    shouldOrbit: true,
    orbitDuration: 36,
    shouldSpin: true,
    spinDuration: 3,
  },
  {
    size: 14,
    containerSize: 710,
    rotation: 144,
    shouldOrbit: true,
    orbitDuration: 44,
    shouldSpin: true,
    spinDuration: 3,
  },
]

const circleOrbits = [
  {
    size: 2,
    containerSize: 530,
    rotation: -39.9,
    shouldOrbit: true,
    orbitDuration: 34,
    shouldSpin: false,
    spinDuration: 0,
  },
  {
    size: 2,
    containerSize: 660,
    rotation: -4.1,
    shouldOrbit: true,
    orbitDuration: 42,
    shouldSpin: false,
    spinDuration: 0,
  },
  {
    size: 3,
    containerSize: 725,
    rotation: 85.5,
    shouldOrbit: true,
    orbitDuration: 46,
    shouldSpin: false,
    spinDuration: 0,
  },
]

export function Hero() {
  return (
    <div className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />
        {starOrbits.map(
          (
            {
              size,
              containerSize,
              rotation,
              shouldOrbit,
              orbitDuration,
              shouldSpin,
              spinDuration,
            },
            index,
          ) => (
            <HeroOrbit
              key={index}
              size={containerSize}
              rotation={rotation}
              shouldOrbit={shouldOrbit}
              orbitDuration={orbitDuration}
              shouldSpin={shouldSpin}
              spinDuration={spinDuration}
            >
              <StarIcon
                className={`text-emerald-300`}
                viewBox="0 0 24 24"
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                }}
              />
            </HeroOrbit>
          ),
        )}
        {sparkleOrbits.map(
          (
            {
              size,
              containerSize,
              rotation,
              shouldOrbit,
              orbitDuration,
              shouldSpin,
              spinDuration,
            },
            index,
          ) => (
            <HeroOrbit
              key={index}
              size={containerSize}
              rotation={rotation}
              shouldOrbit={shouldOrbit}
              orbitDuration={orbitDuration}
              shouldSpin={shouldSpin}
              spinDuration={spinDuration}
            >
              <SparkleIcon
                className={`text-emerald-300/20`}
                viewBox="0 0 24 24"
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                }}
              />
            </HeroOrbit>
          ),
        )}
        {circleOrbits.map(
          (
            {
              size,
              containerSize,
              rotation,
              shouldOrbit,
              orbitDuration,
              shouldSpin,
              spinDuration,
            },
            index,
          ) => (
            <HeroOrbit
              key={index}
              size={containerSize}
              rotation={rotation}
              shouldOrbit={shouldOrbit}
              orbitDuration={orbitDuration}
              shouldSpin={shouldSpin}
              spinDuration={spinDuration}
            >
              <div
                className={`rounded-full bg-emerald-300/20`}
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                }}
              />
            </HeroOrbit>
          ),
        )}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="animate-ping-large absolute inset-0 rounded-full bg-green-500" />
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
