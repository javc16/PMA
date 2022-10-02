import { TestBed } from '@angular/core/testing';

import { RecomendacionesComunesService } from './recomendaciones-comunes.service';

describe('RecomendacionesComunesService', () => {
  let service: RecomendacionesComunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendacionesComunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
