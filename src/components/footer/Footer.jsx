import logo from '../../assets/logo_astronaut.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around w-full bg-[var(--grey)] py-16 text-[var(--white)]">
      
      {/* Logo */}
      <div className='flex items-center justify-center gap-2'>
      <img src={logo} alt="" className='h-10 w-10'/>
      <h1 className='text-2xl font-extrabold uppercase'>The Orbitalist</h1>
      </div>

      {/* Copyright */}
      <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-[var(--less-white)]">
        Copyright © 2026{" "}
        <a
          href="https://www.theorbitalist.space/"
          className="font-medium text-[var(--white)] hover:text-[var(--less-white)] transition-colors"
        >
          The Orbitalist
        </a>
        . All rights reserved.
      </p>

      <div className="mt-6 flex items-center gap-4 text-xl">
        <a
          target='_blank'
          href="https://www.instagram.com/theorbitalist/"
          className="font-medium text-[var(--white)] hover:text-[var(--red)] transition-colors"
        >
          <FaInstagram />
        </a>

        <span className="h-4 w-px bg-white/40" />

        <a
          target='_blank'
          href="https://x.com/theorbitalist"
          className="font-medium text-[var(--white)] hover:text-[var(--red)] transition-colors"
        >
          <FaXTwitter />
        </a>

        <span className="h-4 w-px bg-white/40" />

        <a
          target='_blank'
          href="https://www.linkedin.com/in/the-orbitalist-048b263a1/"
          className="font-medium text-[var(--white)] hover:text-[var(--red)] transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Links */}
      {/* <div className="mt-6 flex items-center gap-4 text-sm">
        <a
          href="#"
          className="font-medium text-[var(--white)] hover:text-[var(--less-white)] transition-colors"
        >
          Terms & Conditions
        </a>

        <span className="h-4 w-px bg-white/40" />

        <a
          href="#"
          className="font-medium text-[var(--white)] hover:text-[var(--less-white)] transition-colors"
        >
          Privacy Policy
        </a>
      </div> */}
    </footer>
  )
}
