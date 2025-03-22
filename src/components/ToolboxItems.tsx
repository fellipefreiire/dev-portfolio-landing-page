import JavascriptIcon from '@/assets/square-js.svg'
import HTMLIcon from '@/assets/html5.svg'
import CssIcon from '@/assets/css3.svg'
import ReactIcon from '@/assets/react.svg'
import ChromeIcon from '@/assets/chrome.svg'
import GithubIcon from '@/assets/github.svg'
import { TechIcon } from '@/components/TechIcon'
import { cn } from '@/utils/cn'
import { Fragment } from 'react'

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

type ToolboxItemsProps = {
  className?: string
  itemsWrapperClassName?: string
}

export function ToolboxItems({
  className,
  itemsWrapperClassName,
}: ToolboxItemsProps) {
  return (
    <div
      className={cn(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex flex-none gap-6 py-0.5 pr-6',
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 rounded-lg px-3 py-2 font-semibold outline-2 outline-white/10"
              >
                <TechIcon as={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
