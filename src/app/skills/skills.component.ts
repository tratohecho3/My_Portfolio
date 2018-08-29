import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public backend_languages = [{title: 'Python'},{title: 'Javascript'},{title: 'Java'},{title: 'Django'},{title: 'Node.js'},{title: 'Express.js'},]
  public backend_others = [{title: 'Postman'}, {title: 'Heroku'}, {title: 'Firebase'}]
  public frontend_languages = [{title: 'HTML5'},{title: 'CSS'}, {title: 'Javascript'}]
  public frontend_frameworks_libraries = [{title: 'Bootstrap'},{title: 'Angular'},{title: 'Vue.js'},{title: 'Materialize Css'},{title: 'Webpack'},{title: 'Flexbox'}]
  public frontend_others = [{title: 'Git'},{title: 'Github'},{title: 'Photoshop'},{title: 'EcmaScript'},{title: 'TypeScript'},{title: 'NPM'}]
  public machine_learning = [{title: 'Tensorflow'},{title: 'Pytorch'}]
  public databases = [{title: 'MySQL'},{title: 'MongoDB'}]
  public os = [{title: 'Linux'},{title: 'Windows'}]


  constructor() { }

  ngOnInit() {
  }

}
