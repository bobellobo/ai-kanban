const featureCards = [
  {
    title: "AI feature breakdown",
    description:
      "Turn a rough product idea into scoped initiatives, milestones, and implementation-ready tasks.",
  },
  {
    title: "Planning that stays current",
    description:
      "Keep priorities visible across product, design, and engineering without losing the why behind each task.",
  },
  {
    title: "One place for delivery",
    description:
      "Move from brief to roadmap to execution with a workspace built for teams shipping SaaS products quickly.",
  },
];

const workflowSteps = [
  "Upload a product brief or paste a feature idea.",
  "Let AI generate themes, tickets, and suggested priorities.",
  "Review, assign, and ship from a shared Kanban workflow.",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For solo builders testing ideas.",
    features: ["1 workspace", "Basic AI generation", "Up to 3 collaborators"],
  },
  {
    name: "Growth",
    price: "$29",
    description: "For product teams shipping weekly.",
    features: ["Unlimited boards", "Priority planning", "Team roles and approvals"],
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For larger teams with deeper process needs.",
    features: ["SSO", "Custom workflows", "Dedicated onboarding"],
  },
];

const faqs = [
  {
    question: "What does the AI actually generate?",
    answer:
      "It structures product ideas into initiatives, backlog items, and execution-ready task groupings your team can refine.",
  },
  {
    question: "Is this only for engineering teams?",
    answer:
      "No. It is designed for product, design, and engineering to collaborate from the same source brief.",
  },
  {
    question: "Can I start without inviting my team?",
    answer:
      "Yes. You can draft and validate ideas solo, then bring collaborators in once the board is ready.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fde68a_0%,_#fff7ed_24%,_#f8fafc_58%,_#e2e8f0_100%)] text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-10 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                AK
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">AI Kanban</p>
                <p className="text-sm text-slate-600">Product planning for teams that ship</p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="#features" className="transition hover:text-slate-950">
                Features
              </a>
              <a href="#workflow" className="transition hover:text-slate-950">
                Workflow
              </a>
              <a href="#pricing" className="transition hover:text-slate-950">
                Pricing
              </a>
              <a href="#faq" className="transition hover:text-slate-950">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/project"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200/70 sm:inline-flex"
              >
                Sign In
              </a>
              <a
                href="/project"
                className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>

        <main className="mt-8 flex flex-col gap-8">
          <section className="grid gap-8 rounded-[2rem] border border-slate-200/70 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="inline-flex rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">
                  SaaS planning, minus the chaos
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Plan features, align your team, and turn briefs into delivery-ready work.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  AI-powered Kanban helps SaaS teams turn fuzzy requests into organized, actionable delivery plans with clear ownership and momentum.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/generate"
                  className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Start Planning
                </a>
                <a
                  href="#features"
                  className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Explore Features
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-950">3x</p>
                  <p className="mt-1 text-sm text-slate-600">Faster backlog creation from new product ideas</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-950">1 hub</p>
                  <p className="mt-1 text-sm text-slate-600">For briefs, tasks, owners, and status updates</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-950">24/7</p>
                  <p className="mt-1 text-sm text-slate-600">AI planning support for product operations</p>
                </div>
              </div>
            </div>

            <div id="access" className="rounded-[1.75rem] bg-slate-950 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.35)] sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">Welcome back</p>
                  <p className="mt-1 text-sm text-slate-300">Sign in or create an account to start building boards.</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                  Beta
                </span>
              </div>

              <div className="mt-6 grid gap-3 rounded-3xl bg-white p-4 text-slate-900">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="team@company.com"
                    className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-offset-2 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300"
                  />
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/project"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Sign In
                  </a>
                  <a
                    href="/project"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                  >
                    Sign Up
                  </a>
                </div>

                <p className="text-center text-xs text-slate-500">
                  By continuing, you agree to a workspace setup designed for product and delivery teams.
                </p>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-medium text-white">What teams use it for</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                  <li>Backlog generation from customer requests</li>
                  <li>Feature scoping before sprint planning</li>
                  <li>Cross-functional handoff visibility</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="features" className="grid gap-5 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-sm font-semibold text-amber-950">
                  +
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </section>

          <section id="workflow" className="grid gap-6 rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Workflow</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A landing page promise backed by a practical product flow.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                From intake to execution, the product is positioned around a workflow teams already understand.
              </p>
            </div>

            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tier.name}</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-slate-950">{tier.price}</span>
                  <span className="pb-1 text-sm text-slate-500">/month</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                  {tier.features.map((feature) => (
                    <li key={feature} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section id="faq" className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                The essentials teams ask before they adopt a planning tool.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {faqs.map((item) => (
                <article key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-amber-300 px-6 py-8 text-slate-950 shadow-[0_20px_60px_rgba(217,119,6,0.18)] sm:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-950/70">Ready to try it</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Start with a brief. Leave with a board your team can actually use.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/kanban"
                  className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Sign Up
                </a>
                <a
                  href="/generate"
                  className="inline-flex rounded-full border border-slate-950/20 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950/40"
                >
                  Open Product Generator
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
