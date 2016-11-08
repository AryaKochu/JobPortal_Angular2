import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterOutlet }   from '@angular/router';
import { routing } from './router/app.router';//import router file
import {MomentModule} from 'angular2-moment';
import { AppService } from './services/app-service.service';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeaderComponent } from './component/header-component/header-component.component';

import { CustomDatePipePipe } from './pipes/custom-date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
     LandingPageComponent,
    HeaderComponent,
    CustomDatePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule
  ],
  providers: [AppService],
  schemas: [  CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
