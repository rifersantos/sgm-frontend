import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostoTerritorialComponent } from './imposto-territorial.component';

describe('ImpostoTerritorialComponent', () => {
  let component: ImpostoTerritorialComponent;
  let fixture: ComponentFixture<ImpostoTerritorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostoTerritorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostoTerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
