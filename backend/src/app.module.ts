import { Module } from '@nestjs/common';
import { FeaturesModule } from './features/features.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [FeaturesModule, WorkspaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
