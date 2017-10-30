import { Component, OnInit,Input } from '@angular/core';
import { StudentManagementService } from '../student-management.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public student;
  public index;
  constructor(private _studentSvc:StudentManagementService,private _router:ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.index = params; // (+) converts string 'id' to a number
      this._studentSvc.getStudentByIndex(this.index).then((data)=>{
        this.student = data;
        console.log(this.student)
      })
   });
  }

}
