import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { MobileActionBar } from "./components/mobile-action-bar";
import { ProductShowcase } from "./components/product-showcase";
import { SectionLabel } from "./components/section-label";
import { SiteHeader } from "./components/site-header";
import { siteConfig } from "./data/site";

const phoneHref = "tel:+441332555018";
const phoneLabel = "+44 1332 555 018";
const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=23+Friar+Gate+Derby+DE1+1BX";
const mapEmbedSrc =
  "https://www.google.com/maps?q=23+Friar+Gate+Derby+DE1+1BX&output=embed";

const heroBackgroundCandidate = join(
  process.cwd(),
  "public",
  siteConfig.heroBackgroundImage.replace(/^\//, ""),
);

const heroBackgroundSrc = existsSync(heroBackgroundCandidate)
  ? siteConfig.heroBackgroundImage
  : siteConfig.heroBackgroundFallbackImage;

const imageSet = {
  servicePortrait:
    "https://images.unsplash.com/photo-1747352570145-75dec25ea0fb?auto=format&fit=crop&w=1200&q=76",
  galleryLead:
    "https://images.unsplash.com/photo-1641318175316-795cd2db99f8?auto=format&fit=crop&w=1300&q=78",
  gallery: [
    "https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?auto=format&fit=crop&w=900&q=74",
    "https://images.unsplash.com/photo-1547648946-2b1fd7eab923?auto=format&fit=crop&w=900&q=74",
    "https://images.unsplash.com/photo-1705976063599-39e79ab87bb1?auto=format&fit=crop&w=900&q=74",
    "https://images.unsplash.com/photo-1648221122279-5246dd0cf86c?auto=format&fit=crop&w=900&q=74",
    "https://images.unsplash.com/photo-1703792686667-7486746389a1?auto=format&fit=crop&w=900&q=74",
    "https://images.unsplash.com/photo-1759134198561-e2041049419c?auto=format&fit=crop&w=900&q=74",
  ],
};

const productSlides = [
  {
    src: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1200&q=82",
    alt: "Professional hair clipper and scissors laid on a dark wood stump",
    title: "Professional Clippers",
  },
  {
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1200&q=82",
    alt: "Barber blow dryer and scissors tool flatlay on dark wood surface",
    title: "Signature Styling Tools",
  },
  {
    src: "/images/barber/products/product-1.jpg",
    alt: "Premium beard oil bottle styled with barber tools on walnut surface",
    title: "Beard Care Essentials",
  },
  {
    src: "/images/barber/products/product-2.jpg",
    alt: "Premium beard oil in editorial product composition on rustic surface",
    title: "Grooming Products",
  },
];

const services = [
  {
    name: "Skin Fade",
    description: "Clean blend from skin to texture on top, finished with razor edges.",
    meta: "From £26",
  },
  {
    name: "Classic Cut",
    description: "Scissor and clipper balance for a sharp everyday shape.",
    meta: "From £24",
  },
  {
    name: "Beard Trim",
    description: "Length control, cheek line detail and a tidy neckline.",
    meta: "From £14",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional hot towel prep with close razor finish.",
    meta: "From £22",
  },
  {
    name: "Cut + Beard",
    description: "Full cut and beard sculpt matched to your face shape.",
    meta: "From £34",
  },
];

const priceBoard = [
  [
    { name: "Skin Fade", price: "£26" },
    { name: "Classic Cut", price: "£24" },
    { name: "Scissor Cut", price: "£28" },
    { name: "Kids Cut (Under 12)", price: "£16" },
  ],
  [
    { name: "Beard Trim", price: "£14" },
    { name: "Hot Towel Shave", price: "£22" },
    { name: "Cut + Beard", price: "£34" },
    { name: "Senior Cut", price: "£18" },
  ],
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/Barbershop",
  name: "Oak and Steel",
  image: [heroBackgroundSrc, imageSet.galleryLead],
  telephone: "+44 1332 555 018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Friar Gate",
    addressLocality: "Derby",
    postalCode: "DE1 1BX",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "££",
  url: "https://example.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <SiteHeader />

      <main className="relative flex flex-col overflow-hidden pb-[calc(9.25rem+env(safe-area-inset-bottom))] sm:pb-32">
        <div className="grain-overlay" aria-hidden />

        <section className="relative isolate h-[100svh]">
          <Image
            src={heroBackgroundSrc}
            alt="Barber shaping a modern fade in warm studio light"
            fill
            priority
            quality={78}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: siteConfig.heroBackgroundPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1114]/92 via-[#14181b]/66 to-[#14181b]/32" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1114]/68 via-[#14181b]/18 to-[#0d1114]/74" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_56%,rgba(8,10,12,0.34)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#14181b] lg:hidden" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#1d2a2e] lg:hidden" aria-hidden />
          <div
            className="pointer-events-none absolute left-1/2 top-[16%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#c9a76a]/20 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-start lg:items-end gap-4 px-4 pt-20 pb-[calc(9.25rem+env(safe-area-inset-bottom))] sm:gap-6 sm:px-6 sm:pt-28 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:gap-8 lg:px-8">
            <div className="max-w-3xl self-end rounded-[2rem] border border-[#c9a76a]/35 bg-[#14181b]/58 p-4 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur-md sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a76a]">
                Derby City Centre
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[2rem] leading-[0.9] tracking-tight text-[#f4e7d0] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
                Sharp cuts, clean fades, proper barber craft.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#f4e7d0]/88 sm:mt-4 sm:text-base">
                Oak and Steel on Friar Gate. Walk-ins welcome, easy appointments, and
                a calm chair from first cut to final detail.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
                <a
                  href={phoneHref}
                  className="rounded-full bg-[#c9a76a] px-5 py-2.5 text-sm font-semibold text-[#14181b] transition-transform hover:scale-[1.02] sm:px-6 sm:py-3"
                >
                  Call Now
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#f4e7d0]/70 px-5 py-2.5 text-sm font-semibold text-[#f4e7d0] transition-colors hover:border-[#c9a76a] hover:text-[#c9a76a] sm:px-6 sm:py-3"
                >
                  Directions
                </a>
              </div>

              <p className="mt-3 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#c9a76a]/95 sm:text-sm">
                Cuts from £18
              </p>

              <div className="mt-4 rounded-full border border-[#c9a76a]/35 bg-[#14181b]/45 px-3 py-2 text-[0.72rem] leading-snug text-[#f4e7d0]/92 sm:px-4 sm:py-2.5 sm:text-sm">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="whitespace-nowrap">Open 9:00-19:00</span>
                  <span aria-hidden className="text-[#c9a76a]/80">
                    •
                  </span>
                  <span className="whitespace-nowrap">Walk-ins</span>
                  <span aria-hidden className="text-[#c9a76a]/80">
                    •
                  </span>
                  <span className="whitespace-nowrap">Card + cash</span>
                </div>
              </div>
            </div>

            <ProductShowcase
              slides={productSlides}
              intervalMs={6000}
              className="hidden lg:block lg:self-center lg:-mt-100"
            />
          </div>
        </section>

        <section
          id="location"
          className="order-6 mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:order-none lg:px-8"
        >
          <div className="section-motif grid gap-5 rounded-3xl border border-[#c9a76a]/25 bg-[#1d2a2e]/50 p-5 sm:p-7 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-5">
              <SectionLabel label="Location + Hours" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f4e7d0] sm:text-4xl">
                Easy to reach in central Derby.
              </h2>
              <div className="space-y-2 text-sm text-[#f4e7d0]/86 sm:text-base">
                <p>23 Friar Gate, Derby, DE1 1BX</p>
                <p>
                  Most cuts: 30 - 45 min - Beard trims: 15 - 20 min
                </p>
              </div>
              <div className="brass-divider" />
              <ul className="space-y-1.5 text-sm text-[#f4e7d0]/88 sm:text-base">
                <li>Mon - Fri: 9:00 - 19:00</li>
                <li>Sat: 8:30 - 18:00</li>
                <li>Sun: 10:00 - 16:00</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#c9a76a] px-5 py-2.5 text-sm font-semibold text-[#14181b]"
                >
                  Get directions
                </a>
                <a
                  href={phoneHref}
                  className="rounded-full border border-[#c9a76a]/50 px-5 py-2.5 text-sm font-semibold text-[#f4e7d0]"
                >
                  {phoneLabel}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#c9a76a]/30 bg-[#14181b]/35">
              <iframe
                title="Google Maps location for Oak and Steel in Derby"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full sm:h-[400px]"
              />
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 rounded-full border border-[#c9a76a]/45 bg-[#14181b]/78 px-4 py-2 text-xs font-semibold tracking-[0.06em] text-[#f4e7d0] backdrop-blur-sm transition-colors hover:border-[#c9a76a] hover:text-[#c9a76a] sm:text-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="order-2 mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:order-none lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="section-motif rounded-3xl border border-[#c9a76a]/25 bg-[#1d2a2e]/45 p-5 sm:p-7 lg:col-span-7">
              <SectionLabel label="Service Menu" />
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f4e7d0] sm:text-4xl">
                Built for sharp shape and clean detail.
              </h2>

              <ul className="mt-6 divide-y divide-[#c9a76a]/25">
                {services.map((service) => (
                  <li key={service.name} className="flex items-start gap-4 py-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#f4e7d0]">
                        {service.name}
                      </h3>
                      <p className="hidden text-sm text-[#f4e7d0]/74 sm:block">
                        {service.description}
                      </p>
                    </div>
                    <p className="ml-auto shrink-0 text-sm font-semibold text-[#c9a76a] sm:text-base">
                      {service.meta}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden sm:block lg:col-span-5 lg:pt-14">
              <div className="absolute -left-3 top-5 hidden h-16 w-16 rounded-2xl border border-[#c9a76a]/40 lg:block" />
              <div className="overflow-hidden rounded-3xl border border-[#c9a76a]/30">
                <Image
                  src={imageSet.servicePortrait}
                  alt="Close portrait of finished fade and beard line up"
                  width={1200}
                  height={1600}
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="aspect-[4/5] w-full object-cover lg:-mt-6 lg:translate-x-4"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="prices"
          className="order-3 mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:order-none lg:px-8"
        >
          <div className="section-motif rounded-3xl border border-[#c9a76a]/25 bg-[#4a2d1f]/25 p-5 sm:p-7">
            <SectionLabel label="Price Board" />
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f4e7d0] sm:text-4xl">
              Straight pricing, easy to scan.
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
              {priceBoard.map((column, index) => (
                <ul
                  key={index}
                  className="space-y-2 border-t border-[#c9a76a]/25 pt-3 first:lg:border-t-0"
                >
                  {column.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3 py-1.5">
                      <span className="text-sm text-[#f4e7d0]/90 sm:text-base">
                        {item.name}
                      </span>
                      <span className="h-px flex-1 bg-[#c9a76a]/25" />
                      <span className="text-sm font-semibold text-[#c9a76a] sm:text-base">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <p className="mt-5 text-xs text-[#f4e7d0]/68 sm:text-sm">
              Prices vary by length and style.
            </p>
          </div>
        </section>

        <section
          id="gallery"
          className="order-4 mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:order-none lg:px-8"
        >
          <SectionLabel label="Work Showcase" />
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f4e7d0] sm:text-4xl">
            Recent cuts, beard detail and shop atmosphere.
          </h2>

          <div className="mt-6 space-y-3 sm:space-y-4">
            <div className="overflow-hidden rounded-3xl border border-[#c9a76a]/25">
              <Image
                src={imageSet.galleryLead}
                alt="Standout portrait cut with textured top and clean taper"
                width={1300}
                height={1600}
                quality={76}
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/10]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {imageSet.gallery.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-[#c9a76a]/25"
                >
                  <Image
                    src={src}
                    alt={`Barber gallery image ${index + 1}`}
                    width={900}
                    height={1125}
                    quality={74}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="order-5 mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:hidden"
        >
          <ProductShowcase slides={productSlides} intervalMs={6000} />
        </section>

        <section
          id="contact"
          className="order-7 mx-auto w-full max-w-6xl px-4 pb-12 pt-9 sm:px-6 lg:order-none lg:px-8"
        >
          <div className="section-motif grid gap-7 rounded-3xl border border-[#c9a76a]/25 bg-[#1d2a2e]/50 p-5 sm:p-7 lg:grid-cols-2">
            <div className="space-y-4">
              <SectionLabel label="Contact / Booking" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f4e7d0] sm:text-4xl">
                Reserve your slot or call straight away.
              </h2>
              <p className="text-sm leading-relaxed text-[#f4e7d0]/82 sm:text-base">
                Send a quick request and we will confirm by phone. If you are nearby,
                call and we can usually fit you in.
              </p>
              <div className="flex gap-3">
                <a
                  href={phoneHref}
                  className="rounded-full bg-[#c9a76a] px-5 py-2.5 text-sm font-semibold text-[#14181b]"
                >
                  Call {phoneLabel}
                </a>
              </div>
              <p className="text-xs text-[#f4e7d0]/65">
                Demo form for portfolio use - no live backend connected.
              </p>
            </div>

            <form className="space-y-3">
              <label className="field-label">
                Name
                <input type="text" name="name" className="field-input" placeholder="Your name" />
              </label>
              <label className="field-label">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="field-input"
                  placeholder="07..."
                />
              </label>
              <label className="field-label">
                Preferred day/time
                <input
                  type="text"
                  name="preferredTime"
                  className="field-input"
                  placeholder="Tue after 4pm"
                />
              </label>
              <label className="field-label">
                Message
                <textarea
                  name="message"
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Cut style or beard details"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#b4532a] px-4 py-3 text-sm font-semibold text-[#f4e7d0]"
              >
                Send request
              </button>
            </form>
          </div>
        </section>

        <footer className="order-8 px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-center text-xs text-[#f4e7d0]/60 sm:px-6 sm:pb-28 lg:px-8">
          Oak and Steel - Portfolio demo concept for local barber pitch.
        </footer>
      </main>

      <MobileActionBar />
    </>
  );
}
