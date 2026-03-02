type SectionLabelProps = {
  label: string;
  className?: string;
};

export function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#c9a76a] ${className}`}
    >
      {label}
    </p>
  );
}
