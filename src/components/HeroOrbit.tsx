import { cn } from '@/utils/cn'

type HeroOrbitProps = {
  children: React.ReactElement
  size: number
  rotation: number
  shouldOrbit?: boolean
  orbitDuration?: number
  shouldSpin?: boolean
  spinDuration?: number
}

export function HeroOrbit({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration = 10,
  shouldSpin = false,
  spinDuration = 10,
}: HeroOrbitProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2">
      <div
        className={cn({
          'animate-spin': shouldOrbit,
        })}
        style={{ animationDuration: `${orbitDuration}s` }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={cn({
              'animate-spin': shouldSpin,
            })}
            style={{ animationDuration: `${spinDuration}s` }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
