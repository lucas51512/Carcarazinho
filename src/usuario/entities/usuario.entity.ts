import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idPessoa:number;

  @Column({ length: 100 })
  nomePessoa:string;

  @Column({ length: 13 })
  fonePessoa:string;

  @Column()
  emailPessoa:string;
}
