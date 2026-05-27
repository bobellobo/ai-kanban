import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(2)
  @MaxLength(160)
  public title: string;

  @IsString()
  @MinLength(2)
  @MaxLength(1500)
  public description: string;

  @IsString()
  @MinLength(1)
  @MaxLength(60)
  public status: string;

  @IsString()
  public projectId: string;

  @IsOptional()
  @IsString()
  public assigneeUserId?: string;
}
