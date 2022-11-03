import { ProjectService } from './../project/project.service';
import { EmployeeCreateDTO } from './dto/create-employee-input';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { Project } from './../project/entities/project.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }
  async create(employee: EmployeeCreateDTO): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }
  async update(id: string, updateEmploy: EmployeeCreateDTO): Promise<Employee> {
    const user = await this.employeeRepository.preload({
      id: id,
      ...updateEmploy,
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.employeeRepository.save(user);
  }
  async remove(id: string): Promise<Employee> {
    const user = await this.findOne(id);
    return this.employeeRepository.remove(user);
  }
  async getProject(id: string): Promise<Project> {
    return this.projectService.findOne(id);
  }
}
