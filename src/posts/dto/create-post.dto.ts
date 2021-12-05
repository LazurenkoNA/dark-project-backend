import { IsString, IsOptional, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Welcome on my chanel', description: 'Post title' })
  @IsString({ message: 'Should be a string' })
  readonly title: string;

  @ApiProperty({ example: 'Default content', description: 'Post content' })
  @IsString({ message: 'Should be a string' })
  readonly content: string;

  @ApiProperty({ example: 1, description: 'User id' })
  @IsNumberString({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty({
    description: 'Post image',
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  readonly image: any;
}
