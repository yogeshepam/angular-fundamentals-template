import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: any;
  editable: true | undefined;
  courselist: any[] | undefined;
  courseById : any;
  
  constructor(private coursesService: CoursesService)
{}


  ngOnInit()
  {
    this.courselist = this.coursesService.getAll();
  }

  ShowCourseById(event: any)
  {
    debugger;
    console.log(event);
    this.courseById = this.coursesService.getCourse(event);
    console.log(this.courseById);

  }
}
