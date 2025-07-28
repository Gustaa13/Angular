import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15 } from './component15';

describe('Component15', () => {
  let component: Component15;
  let fixture: ComponentFixture<Component15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
