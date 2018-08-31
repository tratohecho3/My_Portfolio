import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ProjectsService } from './services/projects.service';
import { AboutComponent } from './about/about.component';
import { WorksService } from './services/works.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SkillsComponent } from './skills/skills.component';
import { VolunteerService } from './services/volunteer.service';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { About2Component } from './about2/about2.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
const getWindow = () => window;
const providers = [
  { provide: WindowRef, useFactory: (getWindow) },
];
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    SkillsComponent,
    VolunteerComponent,
    About2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    InViewportModule.forRoot(providers),
    ScrollSpyModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [ProjectsService, WorksService, VolunteerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
