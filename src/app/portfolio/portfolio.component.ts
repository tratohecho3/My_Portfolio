import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS} from '../list_of_projects';
import { ProjectsService } from '../services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectsService) { 
    this.projects = projectService.getProjects();
  }

  ngOnInit() {
  }

}
