import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Student } from '../student';
@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  students: Student[] = []
  student!: Student
  studentUpdate!: Student
  


  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    sex: new FormControl(''),
  });

  constructor (private route: ActivatedRoute,
    private location: Location,
    private storageService: StorageService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.students = this.storageService.ready();

    const student = this.students.find( student => student.Nome === name);
    
    this.studentForm.setValue({
        name: student?.Nome,
        email: student?.Email,
        dateOfBirth: student?.DataNascimento,
        sex: student?.Sexo
    })
    console.log('this.student')
    this.student = {
      Nome: this.studentForm.value.name,
      Email: this.studentForm.value.email,
      DataNascimento: this.studentForm.value.dateOfBirth,
      Sexo: this.studentForm.value.sex
    }
    console.log(this.student)
    console.log('entrei')
 
  }


  handleOnSubmit(){
    
    this.studentUpdate = {
      Nome: this.studentForm.value.name,
      Email: this.studentForm.value.email,
      DataNascimento: this.studentForm.value.dateOfBirth,
      Sexo: this.studentForm.value.sex
    }

    this.storageService.update(this.student, this.studentUpdate)

    this.location.back();

  }

}
