import { TestBed, inject } from '@angular/core/testing';

import { NgxSelectizeService } from './ngx-selectize.service';

describe('NgxSelectizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxSelectizeService]
    });
  });

  it('should be created', inject([NgxSelectizeService], (service: NgxSelectizeService) => {
    expect(service).toBeTruthy();
  }));
});
