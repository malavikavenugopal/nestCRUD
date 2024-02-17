import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IStudent} from 'src/interface/student.interface';
import {Model} from 'mongoose'
import {CreateStudentDto} from 'src/dto/create-student.dto'
@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private studentModel:Model<IStudent>){

    }

    //creating new student inside mongodb


    async createStudent (createStudentDto:CreateStudentDto):Promise<IStudent>{
        const newStudent = await new this.studentModel(createStudentDto);
        return newStudent.save()
    }

    //reading all the students data
    async getAllStudents():Promise<IStudent[]>{
        const studentData = await this.studentModel.find()
        if(!studentData || studentData.length == 0){
           console.log('Student data not found')

        }
        return studentData;
    }

}
