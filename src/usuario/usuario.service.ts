import { Injectable, Inject, Post, Get, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
) {}

  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({
      where:{
         idPessoa: id,
        }});
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<string> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
    return `Usuario ${id} atualizado`;
  }

  async remove(id: number): Promise<string> {
     await this.usuarioRepository.delete(id);
     return `Usuario ${id} deletado`;
  
  }
}
