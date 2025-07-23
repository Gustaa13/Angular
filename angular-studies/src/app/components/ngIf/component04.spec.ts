import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component04 } from './component04';

describe('Component04', () => {
  let component: Component04;
  let fixture: ComponentFixture<Component04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
