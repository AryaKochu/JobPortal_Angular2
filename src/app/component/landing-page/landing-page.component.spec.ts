/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { Http } from '@angular/http';

import { AppModule } from '../../app.module';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from '../header-component/header-component.component';
import { AppService } from '../../services/app-service.service';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
	let appService;
	 let spy;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
			 imports:      [ AppModule ],
			 providers:    [ AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance; 
		 appService = fixture.debugElement.injector.get(AppService);

		 // Setup spy on the `getJobDetails` method
     spy = spyOn(AppService, 'getJobDetails').and.returnValue(Promise.resolve());
	
  });


it('should have the service called', () => {
  fixture.detectChanges();
     expect(component).toBeTruthy();
});


	  //to check for the title
   it('should have button titled \'Jobs Available\'', () => {
    expect(component.title).toEqual('Jobs Available');
  });

//to check for the note
 it('should have notification saying \'If you take this job, you are agreeing to work ALL DAYS\'', () => {
    expect(component.note).toEqual('If you take this job, you are agreeing to work ALL DAYS');
  });

  //to check for date format - startDate and endDate
   it('startDate and endDate should be in specified format', () => {
    expect(component.startDate).toBe('Mon, Sep 05 2:30am IST');
  }); 
});