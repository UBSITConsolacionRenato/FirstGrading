import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewDetailsComponent } from './students/view-details/view-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    UpdateBookComponent,
    StudentsListComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    NavbarComponent,
    ViewDetailsComponent,
    ArrayOfComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
