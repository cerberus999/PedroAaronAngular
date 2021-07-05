import { TestBed } from '@angular/core/testing';

import { GestorServicesService } from './gestor-services.service';

describe('GestorServicesService', () => {
  let service: GestorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
