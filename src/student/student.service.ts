import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from 'src/interface/student.interface';
import { Model } from 'mongoose'
import { CreateStudentDto } from 'src/dto/create-student.dto'
import { UpdateStudentDto } from 'src/dto/update-student.dto'

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {

    }

    //creating new student inside mongodb


    async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
        const newStudent = await new this.studentModel(createStudentDto);
        return newStudent.save()
    }

    //reading all the students data
    async getAllStudents(): Promise<IStudent[]> {
        const studentData = await this.studentModel.find()
        if (!studentData || studentData.length == 0) {
            console.log('Student data not found')

        }
        return studentData;
    }

    //getting particular data of a student

    async getStudent(studentId: string): Promise<IStudent> {
        const studentData = await this.studentModel.findById(studentId)
        if (!studentData) {
            console.log('Student data not found')

        }
        return studentData
    }
    //deleting student data
    async deleteStudent(studentId: string): Promise<IStudent> {
        const deleteStudent = await this.studentModel.findByIdAndDelete(studentId)
        if (!deleteStudent) {
            console.log('Student data not found')

        }
        return deleteStudent
    }

    //updating student data
    async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto):  Promise<IStudent>  {
        const existingStudent = await this.studentModel.findByIdAndUpdate(studentId,updateStudentDto,{new:true})
        if (! existingStudent) {
            console.log('Student data not found')

        }
        return existingStudent

    }


}
