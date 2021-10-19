import { TestBed } from '@angular/core/testing';

import {AlertaService } from './alerta-service.service';

describe('AlertaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertaService = TestBed.get(AlertaService);
    expect(service).toBeTruthy();
  });
});
