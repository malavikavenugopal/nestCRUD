import {IsString,MaxLength,IsNotEmpty,IsNumber} from "class-validator"

export class CreateStudentDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name : string;
    @IsNumber()
    @IsNotEmpty()
    readonly rollNumber:number;
    @IsNumber()
    @IsNotEmpty()
    readonly class :number;
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
    @IsNumber()
    @IsNotEmpty()
    readonly marks : number;

}