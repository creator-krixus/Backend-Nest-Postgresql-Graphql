import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
