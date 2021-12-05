import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User id' })
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty({ example: 'For bad behavior', description: 'Ban reason' })
  @IsString({ message: 'Should be a string' })
  readonly banReason: string;
}
