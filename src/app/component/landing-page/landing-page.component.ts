import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppService } from '../../services/app-service.service';
import { CustomDatePipePipe } from  '../../pipes/custom-date-pipe.pipe';

@Component({
  selector: 'portal-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers : [ AppService ]
})
export class LandingPageComponent implements OnInit {
  customDate : CustomDatePipePipe;
  jobDetails : any = [];
  company:any={};
  shifts:any=[];
  length :number;
  title:string ='Jobs Available';
  note:string = 'If you take this job, you are agreeing to work ALL DAYS';
  startDate:string;
  endDate:string;
   constructor(private appService : AppService){
      let component = this;
        this.appService.getJobDetails().subscribe(res => {
             component.jobDetails =  res;
             component.length = component.jobDetails.shifts.length-1;
             component.jobDetails = JSON.parse(JSON.stringify(component.jobDetails));   
             component.startDate =   component.jobDetails.shifts[0].startDate;      
             component.endDate =   component.jobDetails.shifts[component.length].endDate;    
             console.log(component.length);    
         });
    }

  ngOnInit() {
  }

}
