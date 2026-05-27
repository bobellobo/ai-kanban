"use client";

import { FormEvent, useState } from "react";
import TaskCard from "../project/components/TaskCard";
import { Tasks } from "@/types/workspace-domain";

const mockedTasks: Tasks = [
  { id: "1", title: "Review generated brief structure", description: "Review and validate the generated brief structure", status: "todo", projectId: "project-1" },
  { id: "2", title: "Break feature into implementation tickets", description: "Break down the feature into smaller implementation tickets", status: "todo", projectId: "project-1" },
  { id: "3", title: "Validate edge cases and blockers", description: "Identify and validate potential edge cases and blockers", status: "todo", projectId: "project-1" },
  { id: "4", title: "Prepare sprint-ready acceptance criteria", description: "Prepare acceptance criteria ready for sprint implementation", status: "todo", projectId: "project-1" },
];

function LoadingTaskCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="animate-pulse space-y-3">
        <div className="h-4 w-2/3 rounded bg-slate-200" />
        <div className="h-3 w-1/3 rounded bg-slate-100" />
      </div>
    </div>
  );
}

export default function FeatureBuilder() {
  const [description, setDescription] = useState("");
  const [targetPlatform, setTargetPlatform] = useState("web");
  const [response, setResponse] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasGenerated(true);
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:3001/api/features/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          targetPlatform,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message ?? "Failed to generate feature output.");
        setResponse(null);
        return;
      }

      setResponse(data);
    } catch {
      setError("Network error while contacting backend API.");
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <main className="mx-auto w-full max-w-6xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Feature Generator</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter a feature idea and generate structured backend output.
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <form onSubmit={handleGenerate} className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-700">
                Feature Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Example: Build a drag-and-drop sprint planner with role-based permissions"
                className="h-36 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
                required
              />
            </div>

            <div>
              <label htmlFor="targetPlatform" className="mb-2 block text-sm font-medium text-slate-700">
                Target Platform
              </label>
              <input
                id="targetPlatform"
                type="text"
                value={targetPlatform}
                onChange={(event) => setTargetPlatform(event.target.value)}
                placeholder="web, mobile, desktop"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
          </form>

          <section className="min-w-0">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Output</h2>
            <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 p-4 lg:max-h-[calc(100vh-16rem)] lg:overflow-y-auto">
              {!hasGenerated ? null : error ? (
                <p className="text-sm text-red-600">{error}</p>
              ) : isLoading ? (
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
                    Generating example output...
                  </div>

                  <div className="grid gap-3">
                    <LoadingTaskCard />
                    <LoadingTaskCard />
                    <LoadingTaskCard />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    <p className="font-semibold">Warning: generation logic is not implemented yet.</p>
                    <p className="mt-1">The tasks below are mocked and displayed for example purposes only.</p>
                  </div>

                  <div className="grid gap-3">
                    {mockedTasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Latest API Response</h3>
                    <pre className="mt-3 overflow-x-auto text-xs text-slate-800">
                      {JSON.stringify(response, null, 2) || "Submit the form to see backend response."}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
