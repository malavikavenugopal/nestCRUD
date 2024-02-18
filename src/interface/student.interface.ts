import {Document} from 'mongoose'
export interface IStudent extends Document{
    readonly name:string;
    readonly rollNumber:number;
    readonly class: number;
    readonly gender :string;
    readonly marks :number
}


//This interface is used to define the structure of documents in a MongoDB collection for students. The readonly modifier ensures that these properties cannot be modified once a document is created. 