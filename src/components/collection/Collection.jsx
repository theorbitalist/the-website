    export default function Collection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-4xl font-bold leading-none mb-8 md:mb-16 tracking-tight">
        SUMMER COLLECTION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8">
          <div className="overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
              alt="Bottega Veneta"
              className="w-full aspect-[3/4] object-cover grayscale hover:scale-110 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h3 className="font-bold text-md md:text-lg mb-2 md:mb-3">BOTTEGA VENETA</h3>
            <p className="text-sm md:text-md leading-relaxed text-(--grey)">
              We met in Los Angeles-based creatives, Jess of J. Navascues that is shaking up the way luxury, fashion,
              jewelry and accessories are made.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
              alt="Andrew Nuding"
              className="w-full aspect-[4/5] object-cover grayscale hover:scale-110 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h3 className="font-bold text-md md:text-lg mb-2 md:mb-3">ANDREW NUDING</h3>
            <p className="text-sm md:text-md  leading-relaxed text-(--grey)">
              Sean Minh has a beautiful job, she offers a glimpse of a talent Saint Mary, Vinayage, the designer reworks
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex items-center justify-center overflow-hidden order-first md:order-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
            alt="Center fashion model"
            className="w-full h-full max-h-[600px] md:max-h-[1200px] object-cover grayscale hover:scale-105 hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="font-bold text-md md:text-lg mb-2 md:mb-3 md:text-right">MAISIE SCHLOSS</h3>
            <p className="text-sm md:text-md leading-relaxed text-(--grey) md:text-right mb-6 md:mb-8">
              Betsy Johnson instantly changes on atmosphere, when she comes in. With her two-York flair, dress butterfly
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
              alt="Maisie Schloss"
              className="w-full aspect-[4/5] object-cover grayscale hover:scale-110 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"
              alt="Cristina Martin"
              className="w-full aspect-[4/5] object-cover grayscale hover:scale-110 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h3 className="font-bold text-md md:text-lg mb-2 md:mb-3 md:text-right">Cristina Martin</h3>
            <p className="text-sm md:text-md leading-relaxed text-(--grey) md:text-right">
              Exhibition supports the new generation of fashion designers through collaboration Marianna Lorenyi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
