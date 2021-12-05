import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../pipes/validation.pipe';
import { GetRoleDto } from './dto/get-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by value' })
  @Get('/:value')
  getByValue(@Param() params: GetRoleDto) {
    return this.roleService.getRoleByValue(params.value);
  }
}
