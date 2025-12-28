import './Footer.css'

export default function Footer() {
  const footerSections = {
    Product: ["Crop Management", "Technology Irrigation", "Soil Health", "Disease Detection"],
    Company: ["Careers", "Blog", "Contact Us", "How We Work"],
    Services: ["Crop Consultation", "Crop Management", "Soil Testing", "Sustainability Practices"],
    Innovations: ["Precision Farming", "Drone Technology", "Vertical Farming", "Agritech"],
    "Success Stories": ["Testimonials", "Case Studies", "Impact Studies", "Report Assessment"],
  }

  return (
    <footer className="bg-(--white) py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-(--grey) footer-logo">The Orbitalist</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-md text-(--grey)">{title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm md:text-md text-(--grey) hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-6 md:pt-8 border-t border-less-white">
          <p className="text-sm md:text-md text-(--grey)">Copyright @ Rural Worker 2024</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-sm md:text-md text-(--grey) hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-sm md:text-md text-(--grey) hover:text-black">
              Terms Of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
