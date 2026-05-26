type StatusBadgeProps = {
  label: string;
  tone: string;
};

export default function StatusBadge({ label, tone }: StatusBadgeProps) {
  return (
    <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tone}`}>
      {label}
    </div>
  );
}