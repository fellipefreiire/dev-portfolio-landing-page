import StarIcon from '@/assets/star.svg'

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]
export function Tape() {
  return (
    <div className="overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex items-center gap-4">
                <span className="text-sm font-extrabold text-gray-900 uppercase">
                  {word}
                </span>
                <StarIcon
                  viewBox="0 0 24 24"
                  className="size-6 -rotate-12 text-gray-900"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
