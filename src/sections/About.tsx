import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'

import bookImage from '@/assets/book-cover.png'
import mapImage from '@/assets/map.png'
import smileMemoji from '@/assets/memoji-smile.png'
import Image from 'next/image'

import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'
import { Hobbies } from '@/components/Hobbies'

export function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems itemsWrapperClassName="-translate-x-1/2 mt-6 animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <Hobbies />
            </Card>
            <Card className="relative h-[320px] md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]" />
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                <Image
                  src={smileMemoji}
                  alt="Smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
