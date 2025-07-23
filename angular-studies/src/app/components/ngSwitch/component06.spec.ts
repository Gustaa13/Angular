import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component06 } from './component06';

describe('Component06', () => {
  let component: Component06;
  let fixture: ComponentFixture<Component06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component06);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
