import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit{
  @Output() showCourse = new EventEmitter<string>();;
  @Output() editCourse: any;
  @Output() deleteCourse: any;
  title:string="";
  @Input() courselist: any[] | undefined;
  @Input() editable: true | undefined;
  courseId: string='';

  constructor(private courseService : CoursesService){}

  ngOnInit(): void {
    this.courselist = this.courseService.getAll();
  }

  
  ShowCourse(id: string)
  {
    console.log(id);
    this.showCourse.emit(id);
  }

}
