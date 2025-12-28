import React from 'react'

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const Blog = () => {
  return (
    <div className="text-(--white)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:max-w-none lg:py-20">
          <h2 className="text-3xl font-bold">Top Stories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-8 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-md">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-xl font-semibold">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Blog
