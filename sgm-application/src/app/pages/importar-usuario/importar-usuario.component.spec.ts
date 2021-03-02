import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarUsuarioComponent } from './importar-usuario.component';

describe('ImportarUsuarioComponent', () => {
  let component: ImportarUsuarioComponent;
  let fixture: ComponentFixture<ImportarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
