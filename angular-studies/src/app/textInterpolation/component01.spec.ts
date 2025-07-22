import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component01 } from './component01';

describe('Component01', () => {
  let component: Component01;
  let fixture: ComponentFixture<Component01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
