import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component03 } from './component03';

describe('Component03', () => {
  let component: Component03;
  let fixture: ComponentFixture<Component03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
