import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
interface Student{
  idNumber: string;
  name: string;
  dateAdded: Date;
  course: string;
}