import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component16 } from './component16';

describe('Component16', () => {
  let component: Component16;
  let fixture: ComponentFixture<Component16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
