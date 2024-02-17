import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {StudentSchema} from './schema/student.schema'
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://malavikavenu914:snjy5678@cluster0.8duiran.mongodb.net/nestcrud?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'Student',schema:StudentSchema}])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
