import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student-service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student = new Student();
  students: Student [] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    const student = new Student();
    this.student.name = 'Aunik 2';
    this.student.gender = 'Male';
  }

}