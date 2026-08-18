import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/estora/SiteHeader";
import { Testimonial } from "@/components/estora/Testimonial";

import hero from "@/assets/hero.jpg";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import about from "@/assets/about.jpg";
import projectMain from "@/assets/project-main.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import vision from "@/assets/vision.jpg";
import cta from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estora — Architectural Homes & Luxury Real Estate" },
      {
        name: "description",
        content:
          "Estora curates architecturally significant homes, villas and residential developments across Delhi NCR. Considered properties for the way you want to live.",
      },
      { property: "og:title", content: "Estora — Architectural Homes & Luxury Real Estate" },
      {
        property: "og:description",
        content:
          "A curated portfolio of modern villas, courtyard houses and forest retreats. Architectural real estate, thoughtfully represented.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  {
    n: "01",
    title: "Research",
    body: "We study neighbourhoods, built quality and long-term value before a single viewing is scheduled.",
  },
  {
    n: "02",
    title: "Secure",
    body: "Private viewings, architectural due diligence and financing structured around your timeline.",
  },
  {
    n: "03",
    title: "Close",
    body: "Documentation, negotiation and handover managed end to end, quietly and without friction.",
  },
];

const PROJECTS = [
  { year: "2026", name: "The Oak Residence", place: "New Delhi", note: "Four-bedroom courtyard home with a shaded central terrace." },
  { year: "2025", name: "Villa Serenity", place: "Gurugram", note: "Glass-walled villa framing a mature tree line." },
  { year: "2025", name: "The Courtyard House", place: "Noida", note: "Concrete, timber and controlled daylight." },
  { year: "2024", name: "Forest Retreat", place: "Delhi NCR", note: "A low pavilion set into a pine slope." },
];

const VISION = [
  { n: "01", title: "Innovative Living Spaces", body: "Homes designed around light, air and how a day actually moves." },
  { n: "02", title: "Sustainable Communities", body: "Low-impact materials and developments built to age gracefully." },
  { n: "03", title: "Exceptional Real Estate", body: "A small, edited portfolio instead of an endless catalogue." },
  { n: "04", title: "Quality Craftsmanship", body: "Detailing inspected on site, not taken on trust." },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex h-[82vh] min-h-[560px] items-end overflow-hidden">
        <img
          src={hero}
          alt="Modern luxury villa with timber cladding and glass walls set on a lawn"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20">
          <Reveal>
            <h1 className="max-w-4xl text-[clamp(2.75rem,9vw,6.25rem)] font-light leading-[0.95] tracking-[-0.02em] text-white">
              Experience
              <br />
              Elevated
              <br />
              Living
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/70">
              Luminous spaces, refined detail and architecture that belongs to its landscape — a
              curated portfolio of homes for a considered life.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#discover"
                className="rounded-md bg-secondary px-6 py-3 text-[13px] text-secondary-foreground transition-opacity duration-300 hover:opacity-85"
              >
                Explore Properties
              </a>
              <a
                href="#about"
                className="rounded-md border border-white/40 px-6 py-3 text-[13px] text-white transition-colors duration-300 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEARCH */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-0 overflow-hidden rounded-md border border-border md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))_auto]"
          >
            <label className="border-b border-border px-5 py-4 md:border-b-0 md:border-r">
              <span className="label-xs block">Search</span>
              <input
                type="text"
                placeholder="Property or location"
                className="mt-2 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            {[
              { label: "Property type", options: ["Any", "Villa", "Residence", "Retreat", "Land"] },
              { label: "Budget", options: ["Any", "₹2–5 Cr", "₹5–10 Cr", "₹10 Cr +"] },
              { label: "Location", options: ["Any", "New Delhi", "Gurugram", "Noida", "Delhi NCR"] },
            ].map((f) => (
              <label key={f.label} className="border-b border-border px-5 py-4 md:border-b-0 md:border-r">
                <span className="label-xs block">{f.label}</span>
                <select className="mt-2 w-full bg-transparent text-sm text-foreground outline-none">
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            ))}
            <button
              type="submit"
              className="bg-primary px-8 py-4 text-[13px] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-3 md:gap-16">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <p className="label-xs">No. {s.n}</p>
              <h3 className="mt-4 text-base font-normal text-foreground">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DISCOVER */}
      <section id="discover" className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            title="Discover"
            body="A short list of architecturally distinct homes, each selected for its siting, light and material honesty."
            action={{ label: "View all properties", href: "#projects" }}
          />

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="lg:pt-16">
              <PropertyCard img={prop2} w={900} h={1100} ratio="aspect-[3/4]" name="Vista Luxe Estate" place="Gurugram" detail="3 BHK · Garden residence" />
            </Reveal>
            <Reveal delay={90} className="sm:col-span-2 lg:col-span-2">
              <PropertyCard img={prop1} w={1200} h={1408} ratio="aspect-[4/5] sm:aspect-[16/13]" name="Grand Villa" place="Delhi NCR · Forest edge" detail="5 BHK · 6,400 sq ft · Pine woodland" large />
            </Reveal>
            <Reveal delay={180} className="lg:pt-24">
              <PropertyCard img={prop3} w={900} h={1100} ratio="aspect-[3/4]" name="Skyline Retreat" place="Noida" detail="4 BHK · Double-height glazing" />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 border-t border-border pt-12 sm:grid-cols-2">
            <Reveal>
              <PropertyCard img={project4} w={900} h={700} ratio="aspect-[16/11]" name="Modern Residence" place="New Delhi" detail="Low horizontal plan · Stone base" />
            </Reveal>
            <Reveal delay={90}>
              <PropertyCard img={project3} w={900} h={700} ratio="aspect-[16/11]" name="Forest House" place="Delhi NCR" detail="Gabled retreat · Clearing site" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            title="About us"
            body="We create exceptional property experiences by connecting clients with thoughtfully designed homes, premium developments and remarkable investment opportunities."
          />
          <Reveal delay={120} className="mt-14 img-zoom rounded-md">
            <img
              src={about}
              alt="Two black gabled luxury homes with glass facades among pine trees"
              loading="lazy"
              width={1920}
              height={1008}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Fifteen years of architectural representation across Delhi NCR — from single-family
              houses to small, deliberately limited developments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            title={
              <>
                Our
                <br />
                Projects
              </>
            }
            body="Completed residences and developments — modest in number, precise in execution."
            action={{ label: "View all projects", href: "#contact" }}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
            <Reveal>
              <figure className="img-zoom rounded-md">
                <img
                  src={projectMain}
                  alt="Courtyard house with timber deck and dining terrace under a large tree"
                  loading="lazy"
                  width={1408}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="mt-4 border-t border-border pt-4">
                <p className="label-xs">{PROJECTS[0]!.year}</p>
                <h3 className="mt-2 text-lg font-light text-foreground">{PROJECTS[0]!.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{PROJECTS[0]!.place}</p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">{PROJECTS[0]!.note}</p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[project2, project3, project4].map((img, i) => {
                const p = PROJECTS[i + 1]!;
                return (
                  <Reveal key={p.name} delay={i * 90} className={i === 0 ? "sm:col-span-2" : ""}>
                    <figure className="img-zoom rounded-md">
                      <img
                        src={img}
                        alt={p.name}
                        loading="lazy"
                        width={900}
                        height={700}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    <div className="mt-3 border-t border-border pt-3">
                      <p className="label-xs">{p.year}</p>
                      <h3 className="mt-1.5 text-sm text-foreground">{p.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{p.place}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            title={
              <>
                Our
                <br />
                Vision
              </>
            }
            body="To build sustainable, innovative and timeless places — homes that hold their value because they were worth making in the first place."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="img-zoom rounded-md">
              <img
                src={vision}
                alt="Modern villa terrace with sliding glass doors and pine trees at golden hour"
                loading="lazy"
                width={1104}
                height={1312}
                className="h-full w-full object-cover"
              />
            </Reveal>

            <ul className="grid content-start gap-0 sm:grid-cols-2">
              {VISION.map((v, i) => (
                <Reveal as="li" key={v.n} delay={i * 80} className="border-t border-border py-7 sm:px-6 sm:first:pl-0">
                  <p className="label-xs">{v.n}</p>
                  <h3 className="mt-3 text-sm text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-foreground transition-opacity duration-300 hover:opacity-60"
                  >
                    Learn more <span aria-hidden>→</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="flex items-start gap-3 text-[clamp(2rem,5vw,3.75rem)] font-light leading-none tracking-[-0.02em] text-foreground">
              <span className="text-muted-foreground/50">/</span>Testimonial
            </h2>
          </Reveal>
          <div className="mt-14">
            <Reveal delay={100}>
              <Testimonial />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={cta}
          alt="Concrete and glass villa beside a reflecting pool at golden hour"
          loading="lazy"
          width={1920}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
          <Reveal>
            <h2 className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-white">
              Find a place
              <br />
              worth calling home.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              Discover thoughtfully selected properties designed for the way you want to live.
            </p>
            <a
              href="#discover"
              className="mt-9 inline-block rounded-md bg-secondary px-6 py-3 text-[13px] text-secondary-foreground transition-opacity duration-300 hover:opacity-85"
            >
              Explore Properties
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 sm:px-8 sm:pt-24">
          <div className="grid gap-10 border-b border-border pb-14 md:grid-cols-3">
            <div>
              <p className="label-xs">Visit</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                14 Amrita Shergill Marg
                <br />
                Lodhi Estate, New Delhi 110003
              </p>
              <p className="mt-4 text-sm text-muted-foreground">+91 98110 24466</p>
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#top" },
                { label: "Properties", href: "#discover" },
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="md:text-right">
              <p className="label-xs">Get in touch</p>
              <a
                href="mailto:hello@estora.com"
                className="mt-3 block text-[clamp(1.25rem,3vw,2rem)] font-light tracking-[-0.01em] text-foreground transition-opacity duration-300 hover:opacity-60"
              >
                hello@estora.com
              </a>
            </div>
          </div>

          <div className="flex items-start pt-10">
            <span className="mr-2 text-[clamp(3rem,16vw,13rem)] font-light leading-[0.8] text-muted-foreground/40">
              /
            </span>
            <span className="text-[clamp(3rem,16vw,13rem)] font-light leading-[0.8] tracking-[-0.03em] text-foreground">
              ESTORA
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">© 2026 Estora Real Estate</p>
            <div className="flex gap-6">
              <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground">
                Terms &amp; Conditions
              </a>
              <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({
  title,
  body,
  action,
}: {
  title: React.ReactNode;
  body: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <Reveal>
        <h2 className="flex items-start gap-3 text-[clamp(2.25rem,6.5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.025em] text-foreground">
          <span className="text-muted-foreground/50">/</span>
          <span>{title}</span>
        </h2>
      </Reveal>
      <Reveal delay={100} className="lg:pt-3">
        <div className="mb-6 hidden h-px w-full bg-border lg:block" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
        {action && (
          <a
            href={action.href}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {action.label} <span aria-hidden>→</span>
          </a>
        )}
      </Reveal>
    </div>
  );
}

function PropertyCard({
  img,
  w,
  h,
  ratio,
  name,
  place,
  detail,
  large = false,
}: {
  img: string;
  w: number;
  h: number;
  ratio: string;
  name: string;
  place: string;
  detail: string;
  large?: boolean;
}) {
  return (
    <figure className="group">
      <div className={`img-zoom rounded-md ${ratio}`}>
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={w}
          height={h}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-4 border-t border-border pt-3">
        <h3 className={`${large ? "text-lg font-light" : "text-sm"} text-foreground`}>{name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{place}</p>
        <p className="mt-1 text-xs text-muted-foreground/80">{detail}</p>
      </figcaption>
    </figure>
  );
}
