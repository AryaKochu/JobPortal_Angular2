/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Provider } from '@angular/core';
import { AppService } from './app-service.service';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

describe('App Service', () => {
  async(inject([AppService, MockBackend], (appService: AppService, mockBackend: MockBackend) => {
    let mockResponse = new Response(new ResponseOptions({ body: { 'redirect': './assets/api/jobDetails.json' } }))
    mockBackend.connections.subscribe(c => c.mockRespond(mockResponse));
    appService.getJobDetails().subscribe(
      data => console.log(data)
    );
  }))
});