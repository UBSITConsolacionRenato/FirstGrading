import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //single-quote ('')
  //template and style should be enclosed with backtick(``)
  template: `
    <h1>Students</h1>
    <div>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let student of students">
        {{student.value}}
        </li>  
      </ul>
    </div>`,
  //adding of styles for the template
  styles: ['div {background-color: blue; max-width: 250px; margin: 20px;}',
          'h1 {padding: 10px; margin: 20px;}',
          'li {font-weight: bold; font-style: italic; max-width: 300px; text-align: center;}',
          'ul {padding: 30px;}']
   
})

export class AppComponent {
  title = 'mid-proj';
  Course = 'APPDEV1';
  CDesc = 'Introduction to Applications Development';
  students = [{value:'John Uno'},
              {value:'James Dos'},
              {value:'Anna Banana'},
              {value:'Donna Sana'},
              {value:'Arla Che'},
              {value:'Vince Ent'}];
  student = 'Elizabeth';
}

//interface
interface Student{
  idNumber: string;
  name: string;
  dateAdded: Date;
  course: string;
}