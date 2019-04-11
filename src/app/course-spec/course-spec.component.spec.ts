import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSpecComponent } from './course-spec.component';

describe('CourseSpecComponent', () => {
  let component: CourseSpecComponent;
  let fixture: ComponentFixture<CourseSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
