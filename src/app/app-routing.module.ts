import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsFormComponent} from './students-form/students-form.component'
import {StudentsComponent} from './students/students.component'
import {StudentsEditComponent} from './students-edit/students-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/student/list', pathMatch: 'full' },
  {path: 'student/list', component:StudentsComponent},
  {path: 'student/register', component:StudentsFormComponent},
  {path: 'student/edit/:name', component:StudentsEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
