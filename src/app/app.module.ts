import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule

  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
