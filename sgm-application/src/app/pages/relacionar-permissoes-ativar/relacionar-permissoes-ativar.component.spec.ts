import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarPermissoesAtivarComponent } from './relacionar-permissoes-ativar.component';

describe('RelacionarPermissoesAtivarComponent', () => {
  let component: RelacionarPermissoesAtivarComponent;
  let fixture: ComponentFixture<RelacionarPermissoesAtivarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionarPermissoesAtivarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionarPermissoesAtivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
