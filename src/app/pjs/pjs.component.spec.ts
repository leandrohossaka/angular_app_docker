import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PJSComponent } from './pjs.component';

describe('PJSComponent', () => {
  let component: PJSComponent;
  let fixture: ComponentFixture<PJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
