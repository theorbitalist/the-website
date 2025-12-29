import React from 'react'

const POTD = () => {
  return (
    <div>
        <h1 className='text-4xl text-center font-bold uppercase'>Picture of the day</h1>
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start mb-8 sm:mb-12 lg:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                <span className="text-(--grey)">Picture of the Day:</span>{" "}
                <span className="text-(--grey)">Tools for Aviation and Telecom Providers</span>
              </h2>
            </div>
            <div>
              <p className="text-(--grey) text-base sm:text-lg leading-relaxed">
                At Global Satellite Solutions, our mission is to empower aviation and telecom providers with superior
                connectivity insights. VIPER is designed to help you fly higher by connecting through innovative
                solutions that meet industry demands. Trust us to help you assess and improve your connectivity.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg"
              alt="Satellite Dishes"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default POTD
