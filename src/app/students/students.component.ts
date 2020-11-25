import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { StudentService} from '../student.service';
import {StorageService} from '../storage.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})



export class StudentsComponent implements OnInit {

  students: Student[] = []

  constructor(private studentService: StudentService, public storageService: StorageService, private route: Router){ }

  ngOnInit(): void {

 //   this.getStudents();
  }


  getStudents(){
    this.studentService.getStudents()
    .subscribe(students => {
      for(var counter=0; counter < students.length; counter++){
        console.log(students[counter])
        this.storageService.create(students[counter])
      }
  });
  }
  
  handleEdit(student: Student){
    this.route.navigateByUrl('student/edit/'+student.Nome);
  }
  
}
