import { StudentService } from './services/student.service';
import { Component } from '@angular/core';
import { Student } from './models/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentApp.UI';
  students: Student[] = [];
  studentToEdit?: Student;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'studentNumber', 'identificationNumber'];

  constructor(private studentService: StudentService) {}

  ngOnInit() : void {
    this.studentService
      .getStudents()
      .subscribe((result : Student[]) => {this.students = result})
  }

  updateStudentList(students : Student[]) {
    this.students = students;
  }

  initNewStudent() {
    this.studentToEdit = new Student();
  }

  editStudent(student : Student) {
    this.studentToEdit = student;
  }

}
