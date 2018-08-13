import { Injectable } from '@angular/core';
import { volunteer } from '../list_volunteer_experience';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor() { }
  get_volunteer(){
    return volunteer
  }
}
