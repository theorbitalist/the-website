"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import "./Navbar.css"

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <nav ref={navRef} className="bg-white border-b border-(--less-white)">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-(--red) flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L2 6L10 10L18 6L10 2Z" fill="white" />
                <path d="M2 14L10 18L18 14" stroke="white" strokeWidth="2" />
                <path d="M2 10L10 14L18 10" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="font-semibold text-3xl uppercase nav-logo text-(--grey)">
              The Orbitalist
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a className="nav-link">Home</a>

            {/* Products */}
            <div className="relative">
              <button onClick={() => toggleDropdown("products")} className="nav-btn">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <div className="dropdown">
                  <a className="dropdown-item">Product 1</a>
                  <a className="dropdown-item">Product 2</a>
                  <a className="dropdown-item">Product 3</a>
                </div>
              )}
            </div>

            <a className="nav-link">Pricing</a>

            {/* Interviews */}
            <div className="relative">
              <button onClick={() => toggleDropdown("interviews")} className="nav-btn">
                Interviews
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === "interviews" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "interviews" && (
                <div className="dropdown">
                  <a className="dropdown-item">All Interviews</a>
                  <a className="dropdown-item">Featured</a>
                  <a className="dropdown-item">Recent</a>
                </div>
              )}
            </div>

            <a className="nav-link">About us</a>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <a className="nav-link">Log in</a>
            <button className="px-4 py-2 bg-(--red) text-white font-medium cursor-pointer">
              Sign up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-(--grey)"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-6 space-y-4">
            <a className="mobile-link">Home</a>

            <button
              onClick={() => toggleDropdown("products")}
              className="mobile-btn"
            >
              Products <ChevronDown className={`w-4 h-4 ${openDropdown === "products" && "rotate-180"}`} />
            </button>
            {openDropdown === "products" && (
              <div className="mobile-dropdown">
                <a>Product 1</a>
                <a>Product 2</a>
                <a>Product 3</a>
              </div>
            )}

            <a className="mobile-link">Pricing</a>

            <button
              onClick={() => toggleDropdown("interviews")}
              className="mobile-btn"
            >
              Interviews <ChevronDown className={`w-4 h-4 ${openDropdown === "interviews" && "rotate-180"}`} />
            </button>
            {openDropdown === "interviews" && (
              <div className="mobile-dropdown">
                <a>All Interviews</a>
                <a>Featured</a>
                <a>Recent</a>
              </div>
            )}

            <a className="mobile-link">About us</a>

            <div className="pt-4 border-t border-(--less-white)">
              <a className="mobile-link">Log in</a>
              <button className="w-full mt-3 px-4 py-2 bg-(--red) text-white">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
