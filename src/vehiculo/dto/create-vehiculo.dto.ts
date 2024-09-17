import { IsString } from "class-validator";

export class CreateVehiculoDto {
    @IsString()
    Marca : string;
    @IsString()
    modelo : number;
    @IsString()
    placa : string;
    @IsString()
    motor : string

}
