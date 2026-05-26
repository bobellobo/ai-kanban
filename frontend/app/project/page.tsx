import Link from "next/link";
import KanbanColumn from "./components/KanbanColumn";

const columns = [
  {
    title: "Not started",
    tone: "border-slate-300 bg-slate-100 text-slate-700",
    cards: [
      { title: "User authentication flow", meta: "Sprint 12 · 6 pts" },
      { title: "Landing analytics instrumentation", meta: "Sprint 12 · 3 pts" },
    ],
  },
  {
    title: "In progress",
    tone: "border-blue-200 bg-blue-50 text-blue-700",
    cards: [
      { title: "Feature prompt validation", meta: "Sprint 11 · 5 pts" },
      { title: "Kanban drag-and-drop interactions", meta: "Sprint 11 · 8 pts" },
    ],
  },
  {
    title: "Blocked",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
    cards: [{ title: "OpenAI usage budgeting controls", meta: "Waiting on finance review" }],
  },
  {
    title: "Done",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    cards: [
      { title: "Backend feature generation endpoint", meta: "Shipped yesterday" },
      { title: "Initial SaaS landing page", meta: "Shipped today" },
    ],
  },
];

export default function MockedKanbanPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#dbeafe_0%,_#eff6ff_28%,_#f8fafc_60%,_#e2e8f0_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.10)] backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Mocked Workspace</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">AI Kanban Board</h1>
              <p className="mt-2 text-sm text-slate-600">Sample UI for status tracking before interfaces and types are finalized.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/generate"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Generate New Feature
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Back to Landing
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column.title}
              title={column.title}
              tone={column.tone}
              cards={column.cards}
            />
          ))}
        </section>
      </main>
    </div>
  );
}