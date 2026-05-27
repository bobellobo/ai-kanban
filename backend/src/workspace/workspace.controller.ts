import { Controller, Get } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';

@Controller('api/workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get('hello')
  getHello() {
    return { message: 'Hello World from workspace' };
  }

  // @Get('snapshot')
  // getSnapshot() { }

  // @Post('users')
  // createUser(@Body() payload: CreateUserDto) {
  //   return this.workspaceService.createUser(payload);
  // }

  // @Post('teams')
  // createTeam(@Body() payload: CreateTeamDto) {
  //   return this.workspaceService.createTeam(payload);
  // }

  // @Post('projects')
  // createProject(@Body() payload: CreateProjectDto) {
  //   return this.workspaceService.createProject(payload);
  // }

  // @Post('tasks')
  // createTask(@Body() payload: CreateTaskDto) {
  //   return this.workspaceService.createTask(payload);
  // }
}
