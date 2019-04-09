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
}
