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
    // return 'This action adds a new project';
    const proj = this.projectRepository.create(Project);
    return this.projectRepository.save(proj); // You can directly use this without create depends on DTO
  }

  async findAll(): Promise<Project[]> {
    // return `This action returns all project`;
    return this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    // return `This action returns a #${id} project`;
    return this.projectRepository.findOne({ where: { id } });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
