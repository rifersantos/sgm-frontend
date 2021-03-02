import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoUsuarioEditarComponent } from './gerenciamento-usuario-editar.component';

describe('GerenciamentoUsuarioEditarComponent', () => {
  let component: GerenciamentoUsuarioEditarComponent;
  let fixture: ComponentFixture<GerenciamentoUsuarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoUsuarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoUsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
