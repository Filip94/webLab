import { StudentManagementService } from './student-management.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public studentsArray = [];
  public selectedStudent;

  constructor(private _studentSvc:StudentManagementService,private _router:Router){
    // this.studentsArray=this._studentSvc.getStudents()
  }
  // selectStudent(student){
  //   this._router.navigate(['/details/',student.index])
  //   this.selectedStudent = student;
  // }
}
