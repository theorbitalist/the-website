import React from 'react'

const Header2 = () => {
  return (
    <div>
      <section className="flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-image-grain.png')] bg-cover bg-center">
                <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 md:mt-28 rounded-full border border-(--white) text-xs">
                    <div className="flex items-center">
                        <img className="size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                        <img className="size-7 rounded-full border-3 border-white -translate-x-2"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                        <img className="size-7 rounded-full border-3 border-white -translate-x-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="-translate-x-2">Join community of 1m+ founders </p>
                </div>
                <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
                    Empowering creators to build on their own terms.
                </h1>
                <p className="text-base mt-2 max-w-xl">Flexible tools, thoughtful design and the freedom to build your way. No limitations, no compromises.</p>
                <p className="text-base mt-3 md:mt-7 max-w-xl">
                    Secure your spot early and unlock our limited-time founding rate.
                </p>
            </section>
    </div>
  )
}

export default Header2
