import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Students } from './student';

@Component({
  selector: 'app-root', //single-quote ('')
  //template and style should be enclosed with backtick(``)
  //template: `
    //<h1>Students</h1>
    //<div class="stud">
      //<ul class="list-group">
        //<li class="list-group-item" *ngFor="let student of students">
        //{{student.value}}
        //</li>  
      //</ul>
    //</div>
    //<br><br>
    //<div class='expressions'>
      //<h3> Expenditure = {{item1 + item2 + item3}}</h3>
      //<h3 *ngFor="let item of Items">{{item.value+item.value+item.value}}</h3> 
    //</div>`,
  //adding of styles for the template
  //styles: ['div.stud {background-color: blue; max-width: 250px; margin: 20px;}',
          //'h1 {padding: 10px; margin: 20px;}',
          //'li {font-weight: bold; font-style: italic; max-width: 300px; text-align: center;}',
          //'ul {padding: 30px;}']
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
}

//interface
