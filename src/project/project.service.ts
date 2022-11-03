import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  create(Project: CreateProjectInput): Promise<Project> {
    const proj = this.projectRepository.create(Project);
    return this.projectRepository.save(proj); // You can directly use this without create depends on DTO
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  async findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: { id },
      relations: ['employees'],
    });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    const project: Project = this.projectRepository.create(updateProjectInput);
    project.id = id;
    return this.projectRepository.save(project);
  }

  remove(id: string) {
    return this.projectRepository.delete(id);
  }
}
