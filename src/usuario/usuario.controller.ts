import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const response = await this.usuarioService.create(createUsuarioDto);
    return response;
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    const response = await this.usuarioService.findAll();
    return response;
  }

  @Get(':idPessoa')
  async findOne(@Param('idPessoa', ParseIntPipe) id: number):Promise<Usuario>{ 
    const response = await this.usuarioService.findOne(id);
    return response;
   }

  @Patch(':idPessoa')
  async update(@Param('idPessoa') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const response = this.usuarioService.update(+id, updateUsuarioDto);
    return response;
  }

  @Delete(':idPessoa')
  async remove(@Param('idPessoa') id: number) {
    const response = await this.usuarioService.remove(id);
    return response;
  }
}
