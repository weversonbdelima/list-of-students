import { Injectable } from '@angular/core';
import {Student} from './student'
import { StudentService} from './student.service';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  students: Student[] = [];

  constructor(private studentService: StudentService) {}


  setData(key: string, students: any){
    localStorage.setItem(key, JSON.stringify(students));
  }

  getData(key: string): any{
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

   //Create student
   create(student: Student){
     console.log('testec')
     console.log(student);
    this.students.push(student)
    this.setData('listOfStudentKey', this.students);
  }

  // Ready student
   ready(){
    this.students = this.getData('listOfStudentKey');
    return this.students;
   }

   //Update student
   update(student: Student, update: Student){


    this.students = this.getData('listOfStudentKey');

    for(var counter=0; counter<this.students.length; counter++){
      if(this.students[counter].Nome == student.Nome){
         this.students[counter] = update;
         break;
      }
    }

    this.setData('listOfStudentKey', this.students);

    // const index = this.students.indexOf(student);
    // console.log('www')
    // console.log(this.students)
    // console.log(index)
    // this.students[index] = update;
    // 

  }

  //Delete student
  delete(student: Student){
       const index = this.students.indexOf(student);
       this.students.splice(index,1);
      this.setData('listOfStudentKey', this.students);
 }

}
