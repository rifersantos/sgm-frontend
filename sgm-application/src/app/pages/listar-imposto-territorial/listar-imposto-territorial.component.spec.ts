import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImpostoTerritorialComponent } from './listar-imposto-territorial.component';

describe('ListarImpostoTerritorialComponent', () => {
  let component: ListarImpostoTerritorialComponent;
  let fixture: ComponentFixture<ListarImpostoTerritorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarImpostoTerritorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImpostoTerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
