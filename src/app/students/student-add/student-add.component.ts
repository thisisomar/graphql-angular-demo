import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  firstName!: string;
  lastName!: string;


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addStudent(): void {
    this.studentService.addStudent(this.firstName, this.lastName).subscribe(() => {
      this.firstName = '';
      this.lastName = '';
    });
  }

}
