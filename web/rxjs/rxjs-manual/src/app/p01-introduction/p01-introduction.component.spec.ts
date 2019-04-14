import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P01IntroductionComponent } from './p01-introduction.component';

describe('P01IntroductionComponent', () => {
  let component: P01IntroductionComponent;
  let fixture: ComponentFixture<P01IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P01IntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P01IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
