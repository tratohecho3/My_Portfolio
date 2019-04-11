import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public isCollapsed = true;
  public courses;
  constructor(private courseService: CoursesService) { 
    this.courses = courseService.get_courses()
  }

  ngOnInit() {
  }

}
