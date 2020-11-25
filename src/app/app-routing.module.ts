import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsFormComponent} from './students-form/students-form.component'
import {StudentsComponent} from './students/students.component'
import {StudentsEditComponent} from './students-edit/students-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {path: 'student', component:StudentsComponent},
  {path: 'student/edit/:name', component:StudentsEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
