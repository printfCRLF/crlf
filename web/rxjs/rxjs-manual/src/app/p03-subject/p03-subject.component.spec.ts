import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P03SubjectComponent } from './p03-subject.component';

describe('P03SubjectComponent', () => {
  let component: P03SubjectComponent;
  let fixture: ComponentFixture<P03SubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P03SubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P03SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
