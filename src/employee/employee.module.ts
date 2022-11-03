import { ProjectModule } from './../project/project.module';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), ProjectModule],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
