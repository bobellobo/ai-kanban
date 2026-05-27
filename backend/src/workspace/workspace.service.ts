import { Injectable } from '@nestjs/common';
import {
  ProjectEntity,
  TaskEntity,
  TeamEntity,
  UserEntity,
} from './types/workspace.types';

@Injectable()
export class WorkspaceService {
  private users: UserEntity[] = [];
  private teams: TeamEntity[] = [];
  private projects: ProjectEntity[] = [];
  private tasks: TaskEntity[] = [];

  private userIndex = 0;
  private teamIndex = 0;
  private projectIndex = 0;
  private taskIndex = 0;
}
