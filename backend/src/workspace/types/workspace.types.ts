export type ProjectStatus = 'active' | 'archived';

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  teamIds: string[];
}

export interface TeamEntity {
  id: string;
  name: string;
  description: string;
  userIds: string[];
  projectIds: string[];
}

export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  projectStatus: ProjectStatus;
  deadline?: string;
  possibleTaskStatuses: string[];
  teamId?: string;
  ownerUserId?: string;
}

export interface TaskEntity {
  id: string;
  title: string;
  description: string;
  status: string;
  projectId: string;
  assigneeUserId?: string;
}

export interface WorkspaceSnapshot {
  users: UserEntity[];
  teams: TeamEntity[];
  projects: ProjectEntity[];
  tasks: TaskEntity[];
}
