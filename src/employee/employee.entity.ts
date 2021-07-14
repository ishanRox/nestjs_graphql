/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  firstName: string
  @Column()
  @Field()
  lastName: string
  @Column()
  @Field()
  designation: string
  @Column()
  @Field({ nullable: true })
  @Column({nullable:true})
  city: string
  @ManyToOne(()=>Project,project=>project.employees)
  @Field(()=>Project)
  project:Project 

  @Column()
  @Field()
  projectId:string
}
