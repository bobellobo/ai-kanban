export type ProjectLifecycleStatus = 'active' | 'archived';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  teamIds: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  userIds: string[];
  projectIds: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  lifecycleStatus: ProjectLifecycleStatus;
  deadline?: string;
  possibleTaskStatuses: string[];
  teamId?: string;
  ownerUserId?: string;
}

export type Projects = ReadonlyArray<Project>

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  projectId: string;
  assigneeUserId?: string;
}

export type Tasks = ReadonlyArray<Task>; 

export interface WorkspaceSnapshot {
  users: User[];
  teams: Team[];
  projects: Projects;
  tasks: Tasks;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  teamIds?: string[];
}

export interface CreateTeamDto {
  name: string;
  description: string;
  userIds?: string[];
}

export interface CreateProjectDto {
  name: string;
  description: string;
  lifecycleStatus: ProjectLifecycleStatus;
  deadline?: string;
  possibleTaskStatuses: string[];
  teamId?: string;
  ownerUserId?: string;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  status: string;
  projectId: string;
  assigneeUserId?: string;
}