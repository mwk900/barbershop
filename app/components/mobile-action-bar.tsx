const navItems = [
  { href: "#services", label: "Services" },
  { href: "#prices", label: "Prices" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Booking" },
];

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.8rem+env(safe-area-inset-bottom))] pt-3">
      <nav className="mx-auto flex w-fit items-center gap-1.5 rounded-[1.5rem] border border-[#c9a76a]/45 bg-[linear-gradient(120deg,rgba(7,9,11,0.97)_0%,rgba(18,23,28,0.92)_52%,rgba(54,34,21,0.84)_100%)] p-2.5 shadow-[0_18px_55px_-20px_rgba(0,0,0,0.92)] backdrop-blur-xl sm:gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-[#c9a76a]/35 bg-[linear-gradient(160deg,rgba(30,38,44,0.94)_0%,rgba(17,22,26,0.96)_100%)] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.08em] text-[#f4e7d0] transition-colors hover:border-[#c9a76a] hover:bg-[linear-gradient(160deg,rgba(70,56,36,0.86)_0%,rgba(31,36,40,0.94)_100%)] hover:text-[#c9a76a] sm:px-5 sm:text-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
