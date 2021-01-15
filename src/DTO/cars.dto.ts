import { CarModelDto } from './carModel.dto';
import { IsNotEmpty, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CarDto {
    @IsNotEmpty()
    @IsString()
    readonly assembler: string;

    @IsNotEmpty()
    @Type(()=> CarModelDto)
    readonly carModel: CarModelDto;
}