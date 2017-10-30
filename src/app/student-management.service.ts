import { Injectable } from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagementService {
  public student:Student;

  private students = [{
    ime: 'Filip',
    prezime: `Shtergiski`,
    index: '131184',
    nasoka: 'KNI',
  },
  {
    ime: 'Stefan',
    prezime: `Popovski`,
    index: '131181',
    nasoka: 'PET',
  },
  {
    ime: 'Dule',
    prezime: `Andov`,
    index: '131233',
    nasoka: 'KNI',
  },
  {
    ime: 'David',
    prezime: `Shtergiski`,
    index: '131028',
    nasoka: 'MT',
  }
];


  constructor() {}

  getStudents ():Promise<any>{
    return Promise.resolve(this.students);
  }
  save(student: Student): Promise<Student> {
    student.index = student.index.toString();
    this.students.push(student);

    return Promise.resolve(student);
  }
  edit(studentOriginal: Student,studentUpdated:Student): Promise<Student> {
    // simulation of the change that the async call will make
    // Object.assign(videosFromServer, this.videos);
    // this.videos = videosFromServer;
    studentUpdated.index= studentUpdated.index.toString();
    Object.assign(studentOriginal, studentUpdated);

    return Promise.resolve(studentUpdated);
  }
  getStudentByIndex(index){
    const result = this.students.filter(student => student.index.toString() === index.index);
    return Promise.resolve(result[0])
  }

}
