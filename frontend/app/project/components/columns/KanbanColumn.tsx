import type { Tasks } from "@/types/workspace-domain";
import StatusBadge from "../StatusBadge";
import TaskCard from "../TaskCard";

type KanbanColumnProps = {
  title: string;
  tone: string;
  cards: Tasks;
};

const DropHereButton = () => (
  <div className="mt-3 rounded-xl border border-dashed border-slate-300/80 bg-slate-50/80 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wide text-slate-400">
      Drop here
  </div>
)

const KanbanColumn = ({ title, tone, cards }: KanbanColumnProps) => (
  <article className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur">
    
    <div className="flex items-center justify-between gap-3">
      <StatusBadge label={title} tone={tone} />
      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500">
        {cards.length} {cards.length === 1 ? "task" : "tasks"}
      </span>
    </div>

    <DropHereButton/>

    <div className="mt-4 grid gap-3">
      {cards.map((card) => <TaskCard key={card.id} task={card} />)}
    </div>

    <DropHereButton/>

  </article>
);

export default KanbanColumn;