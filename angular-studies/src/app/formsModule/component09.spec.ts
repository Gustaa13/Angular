import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component09 } from './component09';

describe('Component09', () => {
  let component: Component09;
  let fixture: ComponentFixture<Component09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component09]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component09);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
