import type { Task } from "@/types/workspace-domain";

export type MockedKanbanColumn = {
  title: string;
  tone: string;
  cards: Task[];
};

export const columns: MockedKanbanColumn[] = [
  {
    title: "Not started",
    tone: "border-slate-300 bg-slate-100 text-slate-700",
    cards: [
      {
        id: "task-not-started-1",
        title: "User authentication flow",
        description: "Sprint 12 · 6 pts",
        status: "Not started",
        projectId: "mocked-project-1",
      },
      {
        id: "task-not-started-2",
        title: "Landing analytics instrumentation",
        description: "Sprint 12 · 3 pts",
        status: "Not started",
        projectId: "mocked-project-1",
      },
    ],
  },
  {
    title: "In progress",
    tone: "border-blue-200 bg-blue-50 text-blue-700",
    cards: [
      {
        id: "task-in-progress-1",
        title: "Feature prompt validation",
        description: "Sprint 11 · 5 pts",
        status: "In progress",
        projectId: "mocked-project-1",
      },
      {
        id: "task-in-progress-2",
        title: "Kanban drag-and-drop interactions",
        description: "Sprint 11 · 8 pts",
        status: "In progress",
        projectId: "mocked-project-1",
      },
    ],
  },
  {
    title: "Blocked",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
    cards: [
      {
        id: "task-blocked-1",
        title: "OpenAI usage budgeting controls",
        description: "Waiting on finance review",
        status: "Blocked",
        projectId: "mocked-project-1",
      },
    ],
  },
  {
    title: "Done",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    cards: [
      {
        id: "task-done-1",
        title: "Backend feature generation endpoint",
        description: "Shipped yesterday",
        status: "Done",
        projectId: "mocked-project-1",
      },
      {
        id: "task-done-2",
        title: "Initial SaaS landing page",
        description: "Shipped today",
        status: "Done",
        projectId: "mocked-project-1",
      },
    ],
  },
];
