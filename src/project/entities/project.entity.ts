import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  name: string;
  @Field(() => Int)
  @Column()
  code: number;

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
