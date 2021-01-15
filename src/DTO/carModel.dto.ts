import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CarModelDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(15)
    readonly name: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly year: number;
    
    @IsNotEmpty()
    @IsString()
    readonly motorPower: string
}