"use client";



export default function Header() {

  return (
    <div className="bg-[var(--grey)]">
      

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <span
            className="
  inline-flex items-center
  whitespace-nowrap
  text-[color:var(--less-white)]
  border border-[color:var(--less-white)]
  px-3 py-1
  rounded-full
  text-xs sm:text-sm
"
          >
            Earth & Space Intelligence for Climate,
            <span className="text-[color:var(--red)] ml-1 font-medium">
              CSR & ESG Decisions
            </span>
          </span>

          <h1 className="text-4xl font-semibold tracking-tight text-[var(--white)] sm:text-5xl lg:text-6xl mt-5">
            Turning Earth & Space Data into Intelligence
          </h1>

          <p className="mt-6 text-base text-[var(--less-white)] sm:text-lg">
            Built for credibility. Designed for impact. Powered by data from
            space.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#mail"
              className="rounded-md bg-[var(--red)] px-4 py-2.5 text-sm font-medium text-[var(--white)] shadow hover:bg-[#b01010] transition"
            >
              Get started
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[var(--white)] hover:text-[var(--less-white)] transition"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
