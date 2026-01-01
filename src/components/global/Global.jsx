const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]

const stats = [
  { name: 'Global average temperature rise', value: '+1.1°C' },
  { name: 'Global forest and land-use change', value: '100+ M h/yr' },
  { name: 'Living under risk conditions', value: '3B+ people' },
  { name: 'ESG reliant on environmental data', value: '70%+' },
]

export default function Global() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="global">
      {/* Background image */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&h=1500&q=80&sat=-100"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-60"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-(--grey) opacity-50"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Global Climate & Sustainability Signals
          </h2>

          <p className="mt-6 text-base text-gray-300 sm:text-lg">
            We track large-scale environmental and climate indicators using Earth observation, helping organizations understand the scale, direction, and urgency of global sustainability challenges.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* Links */}
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-sm font-medium text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div> */}

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
