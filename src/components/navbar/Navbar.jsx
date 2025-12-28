import React, { useState } from "react";
import "./Navbar.css";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  { name: "Analytics", description: "Get a better understanding of your traffic", href: "#", icon: ChartPieIcon },
  { name: "Engagement", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon },
  { name: "Security", description: "Your customers’ data will be safe", href: "#", icon: FingerPrintIcon },
  { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  { name: "Automations", description: "Build strategic funnels", href: "#", icon: ArrowPathIcon },
];

const links = [
  "Features",
  "Rocket",
  "Astronomy",
  "Moon",
  "Marketplace",
  "Company",
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--white) bg-(--grey)">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center px-4 lg:px-8">

        {/* Desktop Centered Menu */}
        <PopoverGroup className="hidden lg:flex z-20 absolute left-1/2 -translate-x-1/2 items-center gap-x-10 whitespace-nowrap">
          
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 text-base font-semibold text-(--white)">
              Product
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-20 mt-3 w-[360px] -translate-x-1/2 rounded-2xl bg-(--grey) outline outline-(--white)">
              <div className="p-3">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-start gap-4 rounded-lg p-4 transition hover:bg-(--less-white)"
                  >
                    <item.icon className="h-6 w-6 text-(--white) group-hover:text-(--grey)" />
                    <div>
                      <p className="font-semibold text-(--white) group-hover:text-(--grey)">
                        {item.name}
                      </p>
                      <p className="text-sm text-(--less-white) group-hover:text-(--grey)">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-base font-semibold text-(--white)"
            >
              {item}
            </a>
          ))}
        </PopoverGroup>

        {/* Mobile Menu Button */}
        <div className="ml-auto lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-(--white)"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (unchanged) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/40" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-(--grey) p-6">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-(--white)" />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <Disclosure>
              <DisclosureButton className="flex w-full items-center justify-between text-lg font-semibold text-(--white)">
                Product
                <ChevronDownIcon className="h-5 w-5" />
              </DisclosureButton>

              <DisclosurePanel className="mt-3 space-y-2">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-2 text-(--white) hover:bg-(--less-white) hover:text-(--grey)"
                  >
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>

            {links.map((item) => (
              <a key={item} href="#" className="block text-lg font-semibold text-(--white)">
                {item}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
