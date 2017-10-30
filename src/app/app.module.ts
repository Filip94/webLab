import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentManagementService} from './student-management.service';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { StudentListComponent } from './student-list.component';
import { StudentCreateComponent } from './create-student/new-student.component';
import { SignInComponent } from './sign_in/sign_in.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentCreateComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '',redirectTo: '/signin',pathMatch: 'full'},
      {path: 'signin',component: SignInComponent},
      {path: 'list',component: StudentListComponent},
      {path: 'details/:index',component: StudentDetailsComponent},
      {path: 'new',component: StudentCreateComponent},
      {path: 'edit/:index',component: StudentCreateComponent},
    ])
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
