import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P02ObservableComponent } from './p02-observable.component';

describe('P02ObservableComponent', () => {
  let component: P02ObservableComponent;
  let fixture: ComponentFixture<P02ObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P02ObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P02ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
