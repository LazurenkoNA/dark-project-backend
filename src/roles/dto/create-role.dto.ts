import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'Role value' })
  @IsString({ message: 'Should be a string' })
  readonly value: string;

  @ApiProperty({ example: 'Default role', description: 'Role description' })
  @IsString({ message: 'Should be a string' })
  readonly description: string;
}
