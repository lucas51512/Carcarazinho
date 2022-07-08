import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.providers';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioProviders } from './usuario/usuario.providers';

@Module({
  imports: [UsuarioModule],
  controllers: [AppController],
  providers: [AppService, ...UsuarioProviders, ...databaseProviders],
})
export class AppModule {}
