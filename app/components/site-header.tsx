export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <a
        href="#"
        className="pointer-events-auto relative inline-flex items-center gap-3 rounded-full border border-[#c9a76a]/45 bg-[linear-gradient(180deg,rgba(10,10,12,0.96)_0%,rgba(14,14,16,0.86)_100%)] px-5 py-2.5 shadow-[0_16px_42px_-20px_rgba(0,0,0,0.92)] backdrop-blur-xl transition-transform hover:scale-[1.01]"
      >
        <span
          className="pointer-events-none absolute inset-x-8 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[#f4e7d0]/55 to-transparent"
          aria-hidden
        />
        <TreeIcon />
        <span className="text-sm font-semibold tracking-[0.1em] text-[#f4e7d0] sm:text-[0.92rem]">
          OAK AND STEEL
        </span>
        <ScissorsIcon />
      </a>
    </header>
  );
}

function TreeIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#c9a76a]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-6.5" />
      <path d="m8.2 10.3 3.8-6.1 3.8 6.1" />
      <path d="m6 14 6-9.5 6 9.5" />
      <path d="M9.7 22h4.6" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#c9a76a]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8.1 8.2 20 3.5" />
      <path d="M8.1 15.8 20 20.5" />
      <path d="m12 12 8-8" />
      <path d="m12 12 8 8" />
    </svg>
  );
}
