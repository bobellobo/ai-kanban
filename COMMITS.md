# Commit conventions

## Commit Messages

Use this format for commits:

```text
type(scope): summary
```

Example:

```text
feat(project): add mocked kanban board columns
```

## Recommended Types

- `feat`: new feature
- `fix`: bug fix
- `refactor`: internal code change without intended behavior change
- `style`: UI or formatting changes
- `docs`: documentation only
- `test`: tests only
- `chore`: maintenance or cleanup
- `build`: build, tooling, or dependency/build-system changes
- `perf`: performance improvement
- `ci`: CI/CD changes

## Recommended Scopes

Use broad scopes when a change spans a large area:

- `frontend`
- `backend`
- `repo`

Use narrower scopes when the change is isolated to one feature or module:

- `landing`
- `project`
- `generate`
- `auth`
- `api`
- `kanban`
- `features`
- `ui`
- `deps`

## Scope Guidelines

- Use `frontend` or `backend` when a change affects multiple parts of that side of the app.
- Use `project`, `generate`, `landing`, `auth`, or `kanban` when the change is localized to a specific page or feature.
- Use `repo` for root config, workspace cleanup, shared setup, or changes touching both frontend and backend.
- Use `deps` for dependency-only updates.

## Examples

```text
feat(frontend): add SaaS landing page hero and pricing
feat(project): add mocked kanban board columns
fix(generate): handle failed feature generation response
fix(backend): remove async handlers failing lint
refactor(project): extract kanban column components
style(landing): improve hero layout and CTA hierarchy
build(repo): stop tracking node_modules
chore(deps): remove unused backend testing packages
docs(repo): add run instructions for frontend and backend
```

## Rules

- Keep commit messages lowercase for `type` and `scope`.
- Keep the summary short and imperative.
- Prefer one logical change per commit.
- Avoid mixing unrelated frontend, backend, and repo changes in the same commit.
- Use `repo` when a change is intentionally cross-cutting.
