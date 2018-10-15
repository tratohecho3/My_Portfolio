import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  works;
  index;
  looking_job = false;
  constructor(private worksService: WorksService) { 
    this.works = worksService.get_works();
    this.index = this.works.length;
  }

  ngOnInit() {
  }

}
