import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDropdownComponent } from './task-dropdown.component';

describe('TaskDropdownComponent', () => {
  let component: TaskDropdownComponent;
  let fixture: ComponentFixture<TaskDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
