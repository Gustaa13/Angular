import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component05 } from './component05';

describe('Component05', () => {
  let component: Component05;
  let fixture: ComponentFixture<Component05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
