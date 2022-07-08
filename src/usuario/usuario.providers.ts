import { DataSource } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

export const UsuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    inject: ['DATA_SOURCE'],
  },
];