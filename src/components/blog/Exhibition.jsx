export default function Exhibition() {
  const events = [
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Winter Collection Sale",
      description:
        "Explore event-gentle styles and trends at our dynamic fashion exhibitions, where creativity and is revolution-caithe is mesmerizing showcase.",
    },
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Exotic Formals Exhibition",
      description:
        "Discover event-gentle styles and trends at our dynamic fashion exhibits, where creativity and is revolution-caithe is a captivating demonstration.",
    },
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Exotic Formals Exhibition",
      description:
        "Discover event-gentle styles and trends at our dynamic fashion exhibits, where creativity and is revolution-caithe is a captivating demonstration.",
    },
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Exotic Formals Exhibition",
      description:
        "Discover event-gentle styles and trends at our dynamic fashion exhibits, where creativity and is revolution-caithe is a captivating demonstration.",
    },
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Exotic Formals Exhibition",
      description:
        "Discover event-gentle styles and trends at our dynamic fashion exhibits, where creativity and is revolution-caithe is a captivating demonstration.",
    },
    {
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
      title: "Exotic Formals Exhibition",
      description:
        "Discover event-gentle styles and trends at our dynamic fashion exhibits, where creativity and is revolution-caithe is a captivating demonstration.",
    },
  ]

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 bg-less-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10 md:mb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            LIVE AND UPCOMING
            <br />
            EXOTIC EXHIBITION EVENTS
          </h2>
        </div>
        <div className="max-w-lg lg:pt-2">
          <p className="text-md md:text-lg leading-relaxed text-(--grey) mb-6 md:mb-8">
            Experience the pinnacle of style at our fashion exhibition events, showcasing the latest trends and
            innovative designs.
          </p>
          <button className="bg-(--red) text-white px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm cursor-pointer font-semibold transition-colors">
              Go to News
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {events.map((event, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden mb-4 md:mb-6">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-normal mb-2 md:mb-3">
              {event.title}
            </h3>
            <p className="text-md md:text-lg text-(--grey) leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
