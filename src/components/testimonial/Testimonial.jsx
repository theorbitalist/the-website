export default function Testimonial() {
  return (
    <section className="relative bg-[var(--grey)] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
          className="mx-auto h-12"
        />

        <figure className="mt-10">
          <blockquote className="text-center text-lg font-medium leading-relaxed text-[var(--white)] sm:text-xl">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
              voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
              rerum et corporis.”
            </p>
          </blockquote>

          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-12 rounded-full"
            />

            <div className="mt-4 flex items-center justify-center space-x-3 text-sm">
              <div className="font-semibold text-[var(--white)]">Judith Black</div>
              <span className="text-gray-500">•</span>
              <div className="text-[var(--less-white)]">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
