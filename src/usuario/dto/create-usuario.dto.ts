import { IsEmail, IsInt, IsString, MaxLength, Min } from "class-validator";

export class CreateUsuarioDto {
    @IsInt()
    @Min(1)
    idPessoa:number; // Possível erro.
    @IsString()
    @MaxLength(75)
    nomePessoa:string;
    @IsString()
    @MaxLength(13)
    fonePessoa:string;
    @IsEmail()
    @MaxLength(255)
    emailPessoa:string;

}
