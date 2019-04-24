import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import * as $ from 'jquery';

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
  public ngOnInit() {
    $(document).ready(function(){    
      var scroll_start = 0;
      var startchange = $('#startchange');
      var offset = startchange.offset();
      if($(document).width() < 1200) {
        $(".navbar-dark").css('background-color', 'black');
      }
      else {
        if (startchange.length){
          scroll_start = $(this).scrollTop();
         if(scroll_start > offset.top) {
             $(".navbar-dark").css('background-color', 'black');
          } else {
             $('.navbar-dark').css('background-color', 'transparent');
          }
        $(document).scroll(function() { 
           scroll_start = $(this).scrollTop();
           if(scroll_start > offset.top) {
               $(".navbar-dark").css('background-color', 'black');
            } else {
               $('.navbar-dark').css('background-color', 'transparent');
            }
        });
         }
      }

   });
  }

}
