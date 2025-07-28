import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15Form } from './component15-form';

describe('Component15Form', () => {
  let component: Component15Form;
  let fixture: ComponentFixture<Component15Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15Form]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component15Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
