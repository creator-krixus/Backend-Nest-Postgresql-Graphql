import { Project } from './../project/entities/project.entity';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import {
  Query,
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/create-employee-input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}
  @Query(() => [Employee], { name: 'getAllEmployyees' })
  findAll() {
    return this.employeeService.findAll();
  }
  @Query(() => Employee, { name: 'getEmployee' })
  findOne(@Args('id') id: string) {
    return this.employeeService.findOne(id);
  }
  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }
  @Mutation(() => Employee)
  updateEmployee(@Args('employee') employee: EmployeeCreateDTO) {
    return this.employeeService.update(employee.id, employee);
  }
  @Mutation(() => Employee)
  removeEmployee(@Args('id') id: string) {
    return this.employeeService.remove(id);
  }
  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    return this.employeeService.getProject(employee.projectId);
  }
}
