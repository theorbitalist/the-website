import React from 'react'

const stats = [
  { id: 1, name: 'Global average temperature rise', value: '+1.1°C' },
  { id: 2, name: 'Global forest and land-use change', value: '100+ M h/yr' },
  { id: 3, name: 'Living under risk conditions', value: '3B+ people' },
]

const Stats = () => {
  return (
    <div>
      <div className="bg-(--grey) py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-(--less-white)">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  )
}

export default Stats
