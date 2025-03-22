import StarIcon from '@/assets/star.svg'
import { Fragment } from 'react'

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
          <div className="animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
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
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
