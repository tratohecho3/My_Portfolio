import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  public volunteer_experiences = []
  constructor(private volunteerService:VolunteerService) {
    this.volunteer_experiences = volunteerService.get_volunteer();
   }

  ngOnInit() {
  }

}
