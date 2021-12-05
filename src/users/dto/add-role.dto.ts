import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'Role value' })
  @IsString({ message: 'Should be a string' })
  readonly value: string;

  @ApiProperty({
    example: 'This description role',
    description: 'Role description',
  })
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;
}
