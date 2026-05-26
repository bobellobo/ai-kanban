"use client";

import { FormEvent, useState } from "react";

export default function FeatureBuilder() {
  const [description, setDescription] = useState("");
  const [targetPlatform, setTargetPlatform] = useState("web");
  const [response, setResponse] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

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
      <main className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Feature Generator</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter a feature idea and generate structured backend output.
        </p>

        <form onSubmit={handleGenerate} className="mt-6 space-y-4">
          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-700">
              Feature Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Example: Build a drag-and-drop sprint planner with role-based permissions"
              className="h-36 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
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
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
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

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Output</h2>
          <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 p-4">
            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : (
              <pre className="overflow-x-auto text-xs text-slate-800">
                {JSON.stringify(response, null, 2) || "Submit the form to see backend response."}
              </pre>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
