type HeroOrbitProps = {
  children: React.ReactElement
  size: number
  rotation: number
}

export function HeroOrbit({ children, size, rotation }: HeroOrbitProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
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
  )
}
