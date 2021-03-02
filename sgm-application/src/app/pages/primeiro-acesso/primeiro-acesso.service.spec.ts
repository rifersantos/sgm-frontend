import { TestBed } from '@angular/core/testing';

import { PrimeiroAcessoService } from './primeiro-acesso.service';

describe('PrimeiroAcessoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimeiroAcessoService = TestBed.get(PrimeiroAcessoService);
    expect(service).toBeTruthy();
  });
});
