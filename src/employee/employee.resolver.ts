import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}
  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createdEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }
}
