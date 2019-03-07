import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PJListComponent } from './pj-list.component';

describe('PJListComponent', () => {
  let component: PJListComponent;
  let fixture: ComponentFixture<PJListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PJListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PJListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
