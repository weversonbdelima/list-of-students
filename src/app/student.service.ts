import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {Student} from './student'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'https://private-8f2b0b-wandersoncesar.apiary-mock.com/alunos'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getStudents(): Observable<Student[]>{
    this.messageService.add('StudentService: fetched heroes');
    return this.http.get<Student[]>(this.studentsUrl);
  }
}
