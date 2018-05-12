import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  works;
  constructor(private worksService: WorksService) { 
    this.works = worksService.get_works();
  }

  ngOnInit() {
  }

}
