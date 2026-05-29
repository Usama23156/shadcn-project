import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg"
import Navbar from "./navbar";

function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">

     <Navbar/>
      {/* Background */}
      
         <img
    src={hero1}
    alt=""
    className="absolute inset-0 w-full h-full lg:object-cover object-none  "
    style={{
      objectPosition:" center ",
    }}
  />
        <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to right, rgba(11,34,64,0.92) 0%, rgba(11,34,64,0.95) 20%, rgba(11,34,64,0.2) 100%)",
    }}
  />
      <div className="relative z-10 mx-auto w-[min(1120px,92vw)]">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Copy + Trust */}
          <div>
           

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Scale your pipeline with{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">
                efficient outsourcing
              </span>{" "}
              teams that convert
            </h1>

            <p className="mt-4 max-w-[62ch] text-base text-white/70 leading-7">
              We deliver lead generation appointment setting and sales process support
              with reliable execution so you can stay focused on closing deals.
            </p>

            {/* Trust indicators */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Quality-first",
                  desc: "Optimized scripts & workflows",
                  tone: "bg-indigo-500/15 border-indigo-500/30",
                },
                {
                  title: "Fast ramp-up",
                  desc: "Start within days, not months",
                  tone: "bg-sky-500/15 border-sky-500/30",
                },
                {
                  title: "Scalable delivery",
                  desc: "Teams that grow with you",
                  tone: "bg-emerald-500/15 border-emerald-500/30",
                },
              ].map((it, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 rounded-xl border ${it.tone} bg-white/5 p-4 backdrop-blur`}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-black"
                    aria-hidden="true"
                  >
                    {idx === 0 ? "✓" : idx === 1 ? "⚡" : "↻"}
                  </div>
                  <div>
                    <div className="font-extrabold text-white/90">{it.title}</div>
                    <div className="text-sm leading-snug text-white/60">{it.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-600/90">
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 hover:bg-white/10"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right: Lead Form panel */}
         
        </div>
      </div>
    </section>
  );
}

export default Hero;