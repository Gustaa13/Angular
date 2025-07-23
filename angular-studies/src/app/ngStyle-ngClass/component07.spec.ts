import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component07 } from './component07';

describe('Component07', () => {
  let component: Component07;
  let fixture: ComponentFixture<Component07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component07]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component07);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
