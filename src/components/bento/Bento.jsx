import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'

export default function Bento() {
  return (
    <section className="relative bg-[var(--grey)] py-24 sm:py-32 overflow-hidden" id='features'>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--red)]">
          REPORTS & CASE STUDIES
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-center text-3xl font-semibold tracking-tight text-[var(--white)] sm:text-4xl">
          Intelligence built for credibility, not clicks
        </p>

        {/* ===== Bento Grid ===== */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* ===== Card 1 ===== */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[var(--grey)]/80 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border border-white/10">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-xl font-semibold text-[var(--white)] max-lg:text-center">
                  Question-Driven Analysis
                </p>
                <p className="mt-2 text-base text-[var(--less-white)] max-lg:text-center">
                  Each case study begins with a real environmental or sustainability question, not a dataset.
                </p>
              </div>

              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div>
                  <img
                    alt=""
                    src={img1}
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Card 2 ===== */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[var(--grey)]/80 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border border-white/10">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-xl font-semibold text-[var(--white)] max-lg:text-center">
                  Data from Space
                </p>
                <p className="mt-2 text-base text-[var(--less-white)] max-lg:text-center">
                  We use satellite imagery and climate data from space.
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10">
                <img
                  alt=""
                  src={img2}
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* ===== Card 3 ===== */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[var(--grey)]/80" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-white/10">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-xl font-semibold text-[var(--white)] max-lg:text-center">
                  No black boxes
                </p>
                <p className="mt-2 text-base text-[var(--less-white)] max-lg:text-center">
                  Every report clearly documents data sources, analytical steps, and limitations.
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10">
                <img
                  alt=""
                  src={img3}
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* ===== Card 4 ===== */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[var(--grey)]/80 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] border border-white/10">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-xl font-semibold text-[var(--white)] max-lg:text-center">
                  Decision-Ready Insights
                </p>
                <p className="mt-2 text-base text-[var(--less-white)] max-lg:text-center">
                  Findings are presented as concise insights, visuals, and implications, making them usable for sustainability planning.
                </p>
              </div>

              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div>
                  <img
                    alt=""
                    src={img4}
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
