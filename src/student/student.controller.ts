import { Controller } from '@nestjs/common';
import {StudentService} from './student.service';
import {Body,Get,HttpStatus,Post,Res,Put,Delete,Param} from '@nestjs/common'
import {CreateStudentDto} from 'src/dto/create-student.dto'

@Controller('student')
export class StudentController {

    constructor (private readonly studentService:StudentService){}

    @Post()
    async createStudent(@Res() response,@Body() createStudentDto:CreateStudentDto){
        try{

            const newStudent = await this.studentService.createStudent(createStudentDto)
            return response.status(HttpStatus.CREATED).json({
            
                message:'Student has been created successfully',
                newStudent
            })
        }
        catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode :400,
                message:'Error Student not created',
                error:'Bad Request'
            })
        }
    }


    @Get()
    async getStudents(@Res() response ){
        try{
const studentData = await this.studentService.getAllStudents();
return response.status(HttpStatus.CREATED).json({
            
    message:'All students data found successfully',
    studentData
})
        }
        catch(err){
            return response.status(err.status).json( err.response )
        }
    }
}
