import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { STUDENTS } from './student-lists';
import { Students } from './student';
import { bookshelf } from 'ngx-bootstrap-icons';
import { ViewDetailsComponent } from './students/view-details/view-details.component';

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'viewdetails/:id', component: ViewDetailsComponent},
  {path: 'viewdetails', component: ViewDetailsComponent},   //this was added to have some reference for the presentation online 
  {path: '', redirectTo: '/books', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [StudentsListComponent, ViewDetailsComponent]