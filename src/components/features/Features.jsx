import { FaSatellite } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const features = [
  {
    name: 'Satellite & Geospatial Analysis',
    description:
      'We analyze Earth observation data to track land use, environmental change, urban growth, and ecosystem stress using trusted, satellite sources.',
    icon: FaSatellite,
  },
  {
    name: 'Climate Risk & Environmental Signals',
    description:
      'We study historical and near-real-time climate indicators such as temperature trends, rainfall variability, floods, and extreme events.',
    icon: FaEarthAsia,
  },
  {
    name: 'CSR & ESG Intelligence',
    description:
      'We map environmental data to CSR goals and ESG frameworks, enabling organizations to support sustainability with evidence-backed indicators.',
    icon: FaRecycle,
  },
  {
    name: 'Research-Backed Insight Products',
    description:
      'We publish transparent case studies, insight briefs, and visual analyses designed for non-technical stakeholders and long-term decision-making.',
    icon: TbReportSearch,
  },
]

export default function Features() {
  return (
    <section className="relative bg-[var(--grey)] py-24 sm:py-32 overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===== Heading ===== */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--red)]">
            EARTH & SPACE INTELLIGENCE
          </h2>

          <p className="mt-3 text-3xl font-semibold tracking-tight text-[var(--white)] sm:text-4xl">
            Everything you need to turn climate data into decisions
          </p>

          <p className="mt-6 text-base text-[var(--less-white)] sm:text-lg">
            The Orbitalist transforms satellite, climate, and geospatial data into structured intelligence for climate action, CSR impact, and ESG reporting.
          </p>
        </div>

        {/* ===== Feature Grid ===== */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold text-[var(--white)]">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[var(--red)]/90 shadow-md shadow-[var(--red)]/30">
                    <feature.icon className="size-6 text-[var(--white)]" />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-2 text-base text-[var(--less-white)]">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
