import { Component, OnInit,Input } from '@angular/core';
import { StudentManagementService } from './student-management.service';


@Component({
  selector: 'student-list',
  templateUrl: './student-list.html',
})
export class StudentListComponent implements OnInit {
    public studentsArray = [];
    public selectedStudent;
  constructor(private _studentSvc:StudentManagementService){
    this._studentSvc.getStudents().then((data)=>{
        this.studentsArray = data;
    })
  }
  selectStudent(student){
    // this._router.navigate(['/details/',student.index])
    this.selectedStudent = student;
  }

  ngOnInit() {
  }

}
