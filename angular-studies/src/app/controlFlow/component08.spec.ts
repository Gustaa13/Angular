import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component08 } from './component08';

describe('Component08', () => {
  let component: Component08;
  let fixture: ComponentFixture<Component08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component08);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
