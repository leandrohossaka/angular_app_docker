import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PJComponent } from './pj.component';

describe('EmployeeComponent', () => {
  let component: PJComponent;
  let fixture: ComponentFixture<PJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
