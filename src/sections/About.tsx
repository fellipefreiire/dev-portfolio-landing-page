import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'

import StarIcon from '@/assets/star.svg'
import bookImage from '@/assets/book-cover.png'
import mapImage from '@/assets/map.png'
import smileMemoji from '@/assets/memoji-smile.png'
import Image from 'next/image'

import JavascriptIcon from '@/assets/square-js.svg'
import HTMLIcon from '@/assets/html5.svg'
import CssIcon from '@/assets/css3.svg'
import ReactIcon from '@/assets/react.svg'
import ChromeIcon from '@/assets/chrome.svg'
import GithubIcon from '@/assets/github.svg'
import { TechIcon } from '@/components/TechIcon'

const toolboxItems = [
  {
    title: 'Javascript',
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

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Hiking',
    emoji: '👞',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Fitness',
    emoji: '🏋',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
]

export function About() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div>
          <Card>
            <div>
              <StarIcon />
              <h3>My Reads</h3>
              <p>Explore the books shaping my perspectives.</p>
            </div>
            <Image src={bookImage} alt="Book cover" />
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft digital
                experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon as={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm.</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoji} alt="Smiling memoji" />
          </Card>
        </div>
      </div>
    </section>
  )
}
