import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Mail() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--grey)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          {/* Left */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--white)] sm:text-4xl">
              Subscribe to our newsletter
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--less-white)] sm:text-lg">
              Thoughtful insights on space, earth intelligence, and emerging technology — delivered weekly.
            </p>

            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-sm text-[var(--white)] outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-red-500"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="size-6 text-[var(--white)]" />
              </div>

              <dt className="mt-4 text-sm font-semibold text-[var(--white)]">
                Weekly articles
              </dt>

              <dd className="mt-2 text-sm leading-relaxed text-gray-400">
                Curated deep-dives on space systems, earth intelligence, and frontier innovation.
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="size-6 text-[var(--white)]" />
              </div>

              <dt className="mt-4 text-sm font-semibold text-[var(--white)]">
                No spam
              </dt>

              <dd className="mt-2 text-sm leading-relaxed text-gray-400">
                Zero noise. Only meaningful insights worth your time.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
