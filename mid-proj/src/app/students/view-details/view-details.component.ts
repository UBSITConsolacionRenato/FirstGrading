import { Component } from '@angular/core';
import { Students } from 'src/app/student';
import { STUDENTS } from 'src/app/student-lists';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  title = 'mid-proj';
  Course = 'APPDEV1';
  CDesc = 'Introduction to Applications Development';
  //students = [{value:'John Uno'},
  //            {value:'James Dos'},
  //            {value:'Anna Banana'},
  //            {value:'Donna Sana'},
  //            {value:'Arla Che'},
  //            {value:'Vince Ent'}];
  //student = 'Elizabeth';
  Items = [{value: 100},
           {value: 200},
           {value: 300}];
  item1 = 100;
  item2 = 200;
  item3 = 300;

  student: Students ={
    id: 20217141,
    fname: 'Renato',
    lname: 'Consolacion',
    Course: 'BSIT',
    YrLevel: '2',
    contactNum: '09168711247',
    dateEnrolled: '2021 05 25',
    picture: 'picture',
    bdate: new Date(2003, 1, 19) //date shown in the web has a month added to it i.e. 2003/01/19 becomes 2003/02/19
  }
  students=STUDENTS;
  //click event handler
  selectedStudent?: Students;

  onSelect(student: Students): void {
    this.selectedStudent = student;
    
  }
}
