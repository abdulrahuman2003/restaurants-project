import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child9Component } from './child9.component';

describe('Child9Component', () => {
  let component: Child9Component;
  let fixture: ComponentFixture<Child9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
