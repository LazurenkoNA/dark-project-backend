import { IsString } from 'class-validator';

export class GetRoleDto {
  @IsString({ message: 'Should be a string' })
  value: string;
}
