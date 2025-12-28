export default function Collaborate() {
  const links = ["Agricultural Monitoring", "Farm Management", "Precision Agriculture", "Organic Farming"]

  return (
    <section
      className="relative py-12 md:py-16 lg:py-24"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-20">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white text-xs mb-6 md:mb-8 tracking-widest uppercase">Weekly Trainings</p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Collaborate and Learn
              <br />
              from Industry Experts and
              <br />
              Enthusiasts
            </h2>
          </div>

          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center gap-4 md:gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-base md:text-lg font-medium hover:text-(--grey) transition-colors border-b border-white/20 pb-3 md:pb-4 last:border-b-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
