import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
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
