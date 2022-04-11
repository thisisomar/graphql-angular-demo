import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students?: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().valueChanges.subscribe((result: any) => {
      this.students = result?.data?.students;
    });
  }
}
