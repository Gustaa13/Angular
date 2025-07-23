import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component00 } from './component00';

describe('Component00', () => {
  let component: Component00;
  let fixture: ComponentFixture<Component00>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component00]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component00);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
