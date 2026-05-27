"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import KanbanColumn from "./project/components/columns/KanbanColumn";
import { getWorkspaceHello } from "@/lib/workspace-api";
import { columns, type MockedKanbanColumn } from "./project/columns_static";


const loadTasks = async (): Promise<MockedKanbanColumn[]> => {
  return columns;
}


export default function MockedKanbanPage() {
  const [kanbanColumns, setKanbanColumns] = useState<MockedKanbanColumn[]>([]);

  useEffect(() => {

    const initializeColumns = async () => {
      const mockedColumns = await loadTasks();
      setKanbanColumns(mockedColumns);
    };

    void initializeColumns();
  }, []);

  

  const handleWorkspaceHello = async () => {
    try {
      const response = await getWorkspaceHello();
      console.log("Workspace hello response:", response);
    } catch (error) {
      console.error("Workspace hello request failed:", error);
    }
  };
  


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
              {/* <button
                type="button"
                onClick={handleWorkspaceHello}
                className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-100"
              >
                Test Workspace Hello
              </button> */}
              <Link
                href="/generate"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Generate New Feature
              </Link>
              {/* <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Back to Landing
              </Link> */}
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-4">
          {kanbanColumns.map(({ title, tone, cards }) => (
            <KanbanColumn
              key={title}
              title={title}
              tone={tone}
              cards={cards}
            />
          ))}
        </section>
      </main>
    </div>
  );
}