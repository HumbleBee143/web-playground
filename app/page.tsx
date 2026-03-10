"use client";

import Image from "next/image";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

const LEVEL_STARS = 1;

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center gap-8 py-12 px-4" style={{ zIndex: 1 }}>

      {/* Dramatic header */}
      <div className="text-center space-y-2">
        <p className="gold-text text-xs uppercase tracking-[0.3em] font-bold ygo-title">
          ⚡ SPECIAL SUMMON ⚡
        </p>
        <h1 className="gold-text text-4xl md:text-6xl font-black uppercase tracking-widest drop-shadow-lg">
          IT IS REVEALED
        </h1>
      </div>

      {/* Vapour text */}
      <div className="vapour-section w-full max-w-2xl h-28">
        <VaporizeTextCycle
          texts={["Ethan", "Rayne", "has", "a", "massive", "nose"]}
          font={{ fontFamily: "Palatino Linotype, Palatino, serif", fontSize: "60px", fontWeight: 700 }}
          color="rgb(245, 200, 66)"
          spread={6}
          density={5}
          animation={{ vaporizeDuration: 1.8, fadeInDuration: 0.8, waitDuration: 0.6 }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H2}
        />
      </div>

      {/* Yu-Gi-Oh Card */}
      <div className="ygo-card card-frame w-72 md:w-80 select-none">
        <div className="card-inner p-3 flex flex-col gap-2">

          {/* Card header — name + attribute */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 bg-gradient-to-r from-yellow-900/60 to-yellow-800/40 border border-yellow-600/50 rounded px-2 py-0.5">
              <span className="gold-text text-sm font-black tracking-tight leading-none">
                Ethan Rayne, the Nose-Bearer
              </span>
            </div>
            <div className="attribute-badge w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-black">🌀</span>
            </div>
          </div>

          {/* Level stars */}
          <div className="flex justify-end gap-0.5 pr-1">
            {Array.from({ length: LEVEL_STARS }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg leading-none drop-shadow-[0_0_4px_rgba(255,200,0,0.8)]">★</span>
            ))}
          </div>

          {/* Card image */}
          <div className="image-frame rounded overflow-hidden mx-1">
            <Image
              src="/POG.jpg"
              alt="Ethan Rayne"
              width={300}
              height={300}
              className="w-full object-cover object-top"
              style={{ maxHeight: "260px" }}
              priority
            />
          </div>

          {/* Type line */}
          <div className="text-center">
            <span className="text-yellow-300/80 text-xs italic font-bold tracking-wide">
              【 Nose-Bearer / Effect 】
            </span>
          </div>

          {/* Effect text box */}
          <div className="effect-box p-2 mx-1 rounded">
            <p className="font-bold text-xs mb-1 not-italic">[Continuous Effect]</p>
            <p>
              Once per turn, this card can be detected from up to 100 metres away by scent alone.
              When "Ethan Rayne" is on the field, all Wind-Attribute cards gain 0 ATK (the wind is blocked).
              Cannot be destroyed by battle — opponents are too distracted staring at the nose.
            </p>
            <p className="mt-1 italic text-gray-600 text-xs">
              "It arrived before he did." — Ancient Bigfoot Proverb
            </p>
          </div>

          {/* ATK / DEF */}
          <div className="stat-bar flex justify-end gap-6 px-3 py-1 rounded-b mx-1">
            <span className="text-yellow-200 text-xs font-black tracking-widest">ATK / <span className="text-white">100</span></span>
            <span className="text-yellow-200 text-xs font-black tracking-widest">DEF / <span className="text-white">100</span></span>
          </div>

          {/* Card number */}
          <div className="flex justify-between items-center px-1 pt-0.5">
            <span className="text-yellow-700/60 text-xs">BFNT-EN001</span>
            <span className="text-yellow-700/60 text-xs">©2025 Bigfoot Networks</span>
          </div>

        </div>
      </div>

      {/* Footer flavour */}
      <p className="gold-text text-xs uppercase tracking-[0.4em] opacity-60 text-center">
        Nose Rating: ∞ / 10
      </p>

    </main>
  );
}
