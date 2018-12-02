/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImggridService } from './imggrid.service';

describe('Service: Imggrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImggridService]
    });
  });

  it('should ...', inject([ImggridService], (service: ImggridService) => {
    expect(service).toBeTruthy();
  }));
});
