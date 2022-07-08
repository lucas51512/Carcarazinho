import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioProviders } from './usuario.providers';
import { databaseProviders } from 'src/database/database.providers';


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, ...UsuarioProviders, ...databaseProviders]
})
export class UsuarioModule {}
