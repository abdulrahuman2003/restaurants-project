import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child8Component } from './child8.component';

describe('Child8Component', () => {
  let component: Child8Component;
  let fixture: ComponentFixture<Child8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
