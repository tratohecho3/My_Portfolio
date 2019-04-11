import { Injectable } from '@angular/core';
import {COURSES} from '../list_of_courses'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  get_courses() {
    return COURSES
  }

  get_course(id) {
    return COURSES.filter((el) => el.id == id)[0]
  }
}
