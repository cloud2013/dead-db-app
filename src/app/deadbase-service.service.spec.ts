/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeadbaseServiceService } from './deadbase-service.service';

describe('DeadbaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeadbaseServiceService]
    });
  });

  it('should ...', inject([DeadbaseServiceService], (service: DeadbaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
