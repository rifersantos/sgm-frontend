import { TestBed } from '@angular/core/testing';

import { ListarImpostoTerritorialService } from './listar-imposto-territorial.service';

describe('ListarImpostoTerritorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarImpostoTerritorialService = TestBed.get(ListarImpostoTerritorialService);
    expect(service).toBeTruthy();
  });
});
