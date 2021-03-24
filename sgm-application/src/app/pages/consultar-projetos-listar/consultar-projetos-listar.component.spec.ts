import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProjetosListarComponent } from './consultar-projetos-listar.component';

describe('ConsultarProjetosListarComponent', () => {
  let component: ConsultarProjetosListarComponent;
  let fixture: ComponentFixture<ConsultarProjetosListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProjetosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProjetosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
