import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { StudentManagementService } from '../student-management.service';



@Component({
  selector: 'create-student',
  templateUrl: './new-student.html',
})
export class StudentCreateComponent implements OnInit {
    public ind;
    public student={
        ime:'',
        prezime:'',
        index:'',
        nasoka:''
    }
    public studentOriginal;
  constructor(private _router:ActivatedRoute,private _studentSvc:StudentManagementService,private _route:Router) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
        this.ind = params;
        if(this.ind.index){
            this._studentSvc.getStudentByIndex(this.ind).then((data)=>{
                this.student = data;
                this.studentOriginal=this.student;
                console.log(this.student)
              })
        }
     });
  }
  saveStudent(){
      if(this.ind.index){
        this._studentSvc.edit(this.studentOriginal,this.student).then((data)=>{
            console.log("Data edit" +data)
            this._route.navigateByUrl("/list")
        })
      }else{
        this._studentSvc.save(this.student).then((data)=>{
            console.log("Data save "+data);
            this._route.navigateByUrl("/list")
        });
      }
  }

}
