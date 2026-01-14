import React from 'react'
import { useState } from "react";


import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo_astronaut_no_bg.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Studies", href: "#studies" },
  { name: "Global", href: "#global" },
  { name: "Connect", href: "#mail" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-10 w-auto" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--white)]"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--white)] hover:text-[var(--less-white)] transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/the-orbitalist-048b263a1/"
              className="text-sm font-medium text-[var(--white)] hover:text-[var(--less-white)] transition"
            >
              LinkedIn →
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--grey)] p-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--white)]/10">
            <div className="flex items-center justify-between">
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-[var(--white)]"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[var(--white)]/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-[var(--white)] hover:bg-white/5 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/the-orbitalist-048b263a1/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-[var(--white)] hover:bg-white/5 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Navbar
