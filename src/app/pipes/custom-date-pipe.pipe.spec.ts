/* tslint:disable:no-unused-variable */
import { LOCALE_ID } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CustomDatePipePipe } from './custom-date-pipe.pipe';
import { DatePipe } from '@angular/common';

describe('CustomDatePipePipe', () => {
  let pipe: CustomDatePipePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LOCALE_ID, useValue: 'en-GB' }, CustomDatePipePipe
      ]
    });

    pipe = TestBed.get(CustomDatePipePipe);
  });
  it('create an instance', () => {
    let value = pipe.transform('2016-09-04T21:00:00Z');
    
    expect(value).toBe('Mon, Sep 05 2:30am IST');
  });
});
