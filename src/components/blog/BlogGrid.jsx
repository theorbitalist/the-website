import { ArrowRight } from "lucide-react"

export default function BlogGrid() {
  const mainArticle = {
    title: "Millennial Farmers Utilize Drones for Land Mapping and Fertilization",
    image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
  }

  const sideArticles = [
    {
      title: "Drought-resistant seedlings for the dry season",
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
    },
    {
      title: "Young Farmers Employ Drones for Terrain Analysis and Crop Nourishment",
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
    },
    {
      title: "Seedlings that thrive in drought conditions for the arid months.",
      image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8 md:mb-12 lg:mb-16 gap-6 lg:gap-0">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-(--grey)">
              Discover the Latest
              <br />
              Agriculture Info on BuruhTani
            </h2>
          </div>

          <div className="flex-1 flex flex-col lg:items-end justify-between w-full">
            <p className="text-sm text-(--grey) mb-4 md:mb-6 lg:text-right max-w-md">
              Our Agriculture Solution boosts productivity and ensure sustainable practice near and forever!
            </p>
            <button className="bg-(--red) text-white px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm cursor-pointer font-semibold transition-colors">
              Go to News
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative h-[400px] md:h-[550px] overflow-hidden group cursor-pointer">
            <img
              src={mainArticle.image || "/placeholder.svg"}
              alt={mainArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <h4 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">
                {mainArticle.title}
              </h4>
              <button className="text-white text-xs md:text-sm flex items-center gap-2 hover:gap-4 transition-all font-medium">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:gap-8">
            {sideArticles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 group cursor-pointer items-start sm:items-center"
              >
                <div className="relative w-full sm:w-48 md:w-64 h-32 md:h-36 overflow-hidden flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3 md:gap-4">
                  <h4 className="text-base md:text-lg font-bold leading-snug text-(--grey)">{article.title}</h4>
                  <button className="text-(--grey) text-xs md:text-sm flex items-center gap-2 hover:gap-4 transition-all font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
