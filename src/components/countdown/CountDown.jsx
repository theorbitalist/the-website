import { useEffect, useState } from "react";
import mars from '../../assets/mars.png'

export default function Countdown() {
  const [time, setTime] = useState({
    hours: "03",
    minutes: "47",
    seconds: "31",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let s = parseInt(prev.seconds);
        let m = parseInt(prev.minutes);
        let h = parseInt(prev.hours);

        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            h = h > 0 ? h - 1 : 0;
          }
        }

        return {
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f6f2ee] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden shadow-xl">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://neverfeltbetter.wordpress.com/wp-content/uploads/2015/10/tm3.jpg"
            alt="The Martian background"
            className="w-full h-[440px] object-cover"
          />

          {/* SOFT CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* TIMER — BETWEEN LAYERS */}
          <div className="absolute inset-0 flex items-start justify-center z-10 pointer-events-none">
            <h1 className="
              text-white
              text-[96px] md:text-[120px]
              font-semibold
              tracking-tight
              opacity-85
            ">
              {time.hours}:{time.minutes}:{time.seconds}
            </h1>
          </div>

          {/* FOREGROUND MOUNTAINS (CUT-OUT PNG) */}
          <img
            src={mars}
            alt="Foreground mountains"
            className="
              absolute bottom-0 left-0
              w-full
              object-cover
              z-20
              pointer-events-none
            "
          />

          {/* UI TEXT */}
          <span className="absolute top-6 left-6 text-xs tracking-widest text-white/80 z-30">
            THEMARTIAN
          </span>

          {/* FOOTER INFO */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 text-xs text-white/70 z-30">
            <span>EXPERIENCE IT IN</span>
            <span className="font-semibold text-white">IMAX</span>
            <span>REALD 3D</span>
            <span>DOLBY CINEMA</span>
            <button className="ml-6 flex items-center gap-2 text-orange-400 hover:text-orange-300 transition">
              ▶ SEE TRAILER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
