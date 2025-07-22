import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component02 } from './component02';

describe('Component02', () => {
  let component: Component02;
  let fixture: ComponentFixture<Component02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
