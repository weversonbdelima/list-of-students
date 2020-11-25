import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {StorageService} from '../storage.service';
import {Student} from '../student'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    sex: new FormControl(''),
  });

  student!:Student

  constructor(private storageService:StorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudent();
    console.log('edit')
  }


  getStudent():void{
    console.log('aa')
    console.log(this.route.snapshot.paramMap.get('student'))
  }

  handleOnSubmit(){

    this.student = {
      Nome: this.studentForm.value.name,
      Email: this.studentForm.value.email,
      DataNascimento: this.studentForm.value.dateOfBirth,
      Sexo: this.studentForm.value.sex,
    }
    console.log(this.student)
    this.storageService.create(this.student);
  }

}
