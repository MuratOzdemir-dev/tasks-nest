import { IsEnum } from 'class-validator';
import { TaskStatus } from '../types';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
