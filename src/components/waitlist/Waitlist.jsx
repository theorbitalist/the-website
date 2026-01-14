"use client";
import { useState } from "react";
import orbitalist from "../../assets/Orbitalist.png";
import logo from "../../assets/logo.png";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwXFQqrFtcSE6rD5EWL1CMj8EqyloCncBLIdn8oLw1BDA3Tv1UnC5InOF9woI9uJL0i/exec",
        {
          method: "POST",
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setShowToast(true);
        e.target.reset();

        // Auto hide toast after 3s
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Full screen on mobile as hero, fixed background on desktop */}
      <div className="hidden md:fixed md:inset-0 md:block">
        <img
          src={orbitalist}
          alt="The Orbitalist"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Container - Scrollable content on mobile, fixed card on desktop */}
      <div className="flex flex-col md:relative md:min-h-screen md:items-start md:justify-start">
        <img
          src={orbitalist}
          alt="The Orbitalist"
          className="w-full md:hidden"
        />

        <div className="w-full border border-white bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:max-w-md md:p-8 lg:max-w-lg">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2 md:mb-8">
            <div className="flex h-20 w-20 items-center justify-center bg-black">
              <img src={logo} alt="logo" />
            </div>
            {/* <span className="text-xl font-bold text-white">Waita</span> */}
          </div>

          {/* Launch Date */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80 md:mb-4">
            Launching <span className="text-(--red)"> December 2026</span>
          </p>

          {/* Heading */}
          <h1 className="mb-3 text-balance text-2xl font-bold leading-tight text-white md:mb-4 md:text-4xl">
            Space isn’t far away. <br />
            It’s right here.
          </h1>

          {/* Description */}
          <p className="mb-4 text-pretty text-sm leading-relaxed text-white/90 md:mb-6">
            The Orbitalist is{" "}
            <span className="text-(--red)">
              India's first space-merch brand{" "}
            </span>{" "}
            creating space inspired posters, from planets and galaxies to
            astronauts and cosmos.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row"
          >
            <input
              type="email"
              name="email"
              placeholder="name@domain.com"
              className="flex h-10 flex-1 border border-white bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`flex h-10 items-center justify-center gap-2 bg-(--red) px-6 py-2 text-sm font-medium text-white transition
    ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-(--red)/90"}
  `}
            >
              {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              )}
              {loading ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
          {showToast && (
            <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 bg-(--red) px-4 py-2 text-lg text-white shadow-lg backdrop-blur-md">
              Successfully Submitted!
            </div>
          )}

          {/* Social Proof */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-500">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-purple-500">
                <img
                  src="https://i.pravatar.cc/150?img=45"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-green-500">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-orange-500">
                <img
                  src="https://i.pravatar.cc/150?img=68"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-white/80">
              163+ orbitalists have already joined
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-white/30 pt-4 md:mt-8">
            <p className="text-xs text-white/70">
              © 2026 -{" "}
              <a className="underline hover:text-white">The Orbitalist</a> - All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
