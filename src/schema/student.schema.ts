import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Student {
    @Prop()
    name:String;
    @Prop()
    roleNumber:number;
    @Prop()
    class:number;
    @Prop()
    gender:String;
    @Prop()
    marks:number;

}

export const StudentSchema = SchemaFactory.createForClass(Student)