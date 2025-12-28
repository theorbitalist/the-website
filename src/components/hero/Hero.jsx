import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Link
      to="/"
      className="block relative mb-8 sm:mb-12 lg:mb-16 overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] group cursor-pointer"
    >
      <img
        src="https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg"
        alt="Featured article"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
        {/* Title */}
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mb-6 max-w-[700px] text-balance">
          Sophia Mesabah from Untitled Ventures on Sustainable and Profitable
          Growth & What We Can Learn From the Gumroad Mess
        </h2>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-8 text-white text-sm sm:text-md">
          {/* Author */}
          {/* <div className="flex items-center gap-2">
            <img
              src="/abstract-profile.png"
              alt="Author"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            />
            <span className="hidden sm:inline">Bamika Sulhani</span>
          </div> */}

          {/* Date */}
          <div className="flex items-center gap-2">
            <span className="text-white/80 hidden sm:inline">
              Published on
            </span>
            <span>10 April 2024</span>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 sm:px-3 py-1 border border-(--red) text-sm sm:text-md">
              Interview
            </span>
            <span className="px-2 sm:px-3 py-1 border border-(--red) text-sm sm:text-md">
              Design
            </span>
            <span className="px-2 sm:px-3 py-1 border border-(--red) text-sm sm:text-md hidden sm:inline">
              Brand
            </span>
            <span className="px-2 sm:px-3 py-1 border border-(--red) text-sm sm:text-md hidden lg:inline">
              Interview
            </span>
            <span className="px-2 sm:px-3 py-1 border border-(--red) text-sm sm:text-md">
              12 min read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
