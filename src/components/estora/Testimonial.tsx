import { useState } from "react";
import client1 from "@/assets/client-1.jpg";

const ITEMS = [
  {
    quote:
      "Estora reframed how we thought about buying a home. Every property they showed us was considered, quiet and genuinely well built — nothing felt like a listing, everything felt like a place we could live in.",
    name: "Ananya Deshpande",
    role: "Homeowner, The Oak Residence",
  },
  {
    quote:
      "The process was calm from first walkthrough to closing. They understood the architecture, the light, the material choices — and negotiated with the same precision.",
    name: "Rohan Mehta",
    role: "Investor, Gurugram",
  },
  {
    quote:
      "We were shown four homes instead of forty, and the third one was ours. That kind of editing is rare and worth everything.",
    name: "Sara Iyer",
    role: "Homeowner, Villa Serenity",
  },
];

export function Testimonial() {
  const [i, setI] = useState(0);
  const item = ITEMS[i]!;

  const go = (dir: number) => setI((prev) => (prev + dir + ITEMS.length) % ITEMS.length);

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] md:gap-16">
      <div className="flex items-start gap-4">
        <img
          src={client1}
          alt={item.name}
          loading="lazy"
          width={512}
          height={512}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="text-sm text-foreground">{item.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>

      <div>
        <p
          key={i}
          className="max-w-3xl text-lg font-light leading-relaxed text-foreground transition-opacity duration-700 sm:text-xl"
        >
          {item.quote}
        </p>

        <div className="mt-12 flex items-center gap-6 border-t border-border pt-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            ←
          </button>
          <span className="text-xs tabular-nums text-muted-foreground">
            {String(i + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}