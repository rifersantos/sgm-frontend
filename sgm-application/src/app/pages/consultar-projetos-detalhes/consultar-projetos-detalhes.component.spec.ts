import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProjetosDetalhesComponent } from './consultar-projetos-detalhes.component';

describe('ConsultarProjetosDetalhesComponent', () => {
  let component: ConsultarProjetosDetalhesComponent;
  let fixture: ComponentFixture<ConsultarProjetosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProjetosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProjetosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
