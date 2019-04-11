import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-spec',
  templateUrl: './course-spec.component.html',
  styleUrls: ['./course-spec.component.css']
})
export class CourseSpecComponent implements OnInit {
  public course;
  public password;
  public wrong_password = false;
  public code = false;
  constructor(  private route: ActivatedRoute,private router: Router, private courseService: CoursesService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.course =  this.courseService.get_course(id)       
      
  }

  verifyPassword() {
    if(this.password == this.course.password) {
      this.code = true
    }
    else {
      this.wrong_password = true
    }
  }
}
