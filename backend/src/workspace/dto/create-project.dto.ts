import {
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import type { ProjectStatus } from '../types/workspace.types';

const projectStatuses: ProjectStatus[] = ['active', 'archived'];

export class CreateProjectDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  public name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(1000)
  public description: string;

  @IsIn(projectStatuses)
  public projectStatus: ProjectStatus;

  @IsOptional()
  @IsDateString()
  public deadline?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  @IsString({ each: true })
  public possibleTaskStatuses: string[];

  @IsOptional()
  @IsString()
  public teamId?: string;

  @IsOptional()
  @IsString()
  public ownerUserId?: string;
}
