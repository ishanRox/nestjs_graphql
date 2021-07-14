import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  create(createProjectInput: CreateProjectInput) {
    const createdPoject = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(createdPoject);
  }

  findAll() {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  findOne(id: number) {
    return this.projectRepository.findOne(id);
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
