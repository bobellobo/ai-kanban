import {
  ArrayUnique,
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  public password: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  public teamIds?: string[];
}
