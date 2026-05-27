import {
  CreateProjectDto,
  CreateTaskDto,
  CreateTeamDto,
  CreateUserDto,
  Project,
  Task,
  Team,
  User,
  WorkspaceSnapshot,
} from '@/types/workspace-domain';
import { fetchJson, HelloResponse } from './utils';


export function getWorkspaceSnapshot() {
  return fetchJson<WorkspaceSnapshot>('/api/workspace/snapshot');
}

export function createUser(payload: CreateUserDto) {
  return fetchJson<User>('/api/workspace/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function createTeam(payload: CreateTeamDto) {
  return fetchJson<Team>('/api/workspace/teams', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function createProject(payload: CreateProjectDto) {
  return fetchJson<Project>('/api/workspace/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function createTask(payload: CreateTaskDto) {
  return fetchJson<Task>('/api/workspace/tasks', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function getWorkspaceHello() {
  return fetchJson<HelloResponse>('/api/workspace/hello');
}

