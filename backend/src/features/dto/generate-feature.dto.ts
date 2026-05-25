import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateFeatureDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  targetPlatform: string;
}