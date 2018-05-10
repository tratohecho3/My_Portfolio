import { Injectable } from '@angular/core';
import { PROJECTS} from '../list_of_projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { 
    
  }

  getProjects(){
    return PROJECTS
  }
}
