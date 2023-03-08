import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    UpdateBookComponent,
    StudentsListComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
