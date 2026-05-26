type TaskCardProps = {
  title: string;
  meta: string;
};

export default function TaskCard({ title, meta }: TaskCardProps) {
  return (
    <div className="group cursor-grab rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing active:scale-[0.99]">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        <span className="grid grid-cols-2 gap-0.5 pt-0.5 text-slate-300 transition group-hover:text-slate-500">
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500">{meta}</p>
    </div>
  );
}