import { TestBed } from '@angular/core/testing';

import { MonitorAsignadoService } from './monitor-asignado.service';

describe('MonitorAsignadoService', () => {
  let service: MonitorAsignadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorAsignadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
