import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoUsuarioListarComponent } from './gerenciamento-usuario-listar.component';

describe('GerenciamentoUsuarioListarComponent', () => {
  let component: GerenciamentoUsuarioListarComponent;
  let fixture: ComponentFixture<GerenciamentoUsuarioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoUsuarioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoUsuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
