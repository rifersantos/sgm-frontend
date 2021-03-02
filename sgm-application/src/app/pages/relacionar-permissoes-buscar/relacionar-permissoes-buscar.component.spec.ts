import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarPermissoesBuscarComponent } from './relacionar-permissoes-buscar.component';

describe('RelacionarPermissoesBuscarComponent', () => {
  let component: RelacionarPermissoesBuscarComponent;
  let fixture: ComponentFixture<RelacionarPermissoesBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionarPermissoesBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionarPermissoesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
