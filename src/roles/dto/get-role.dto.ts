import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetRoleDto {
  @ApiProperty({ example: 'USER', description: 'Role value' })
  @IsString({ message: 'Should be a string' })
  value: string;
}
