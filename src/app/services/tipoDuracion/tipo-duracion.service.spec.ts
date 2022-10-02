import { TestBed } from '@angular/core/testing';

import { TipoDuracionService } from './tipo-duracion.service';

describe('TipoDuracionService', () => {
  let service: TipoDuracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDuracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
