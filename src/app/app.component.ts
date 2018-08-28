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
    console.log('entre')
    $(document).ready(function(){       
      var scroll_start = 0;
      var startchange = $('#startchange');
      var offset = startchange.offset();
       if (startchange.length){
        console.log('entre2')

      $(document).scroll(function() { 
         scroll_start = $(this).scrollTop();
         console.log('entre3')

         if(scroll_start > offset.top) {
             $(".navbar-dark").css('background-color', 'black');
             console.log('entre4')
          } else {
             $('.navbar-dark').css('background-color', 'transparent');
             console.log('entre5')
          }
      });
       }
   });
  }
}
