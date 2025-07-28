import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15Table } from './component15-table';

describe('Component15Table', () => {
  let component: Component15Table;
  let fixture: ComponentFixture<Component15Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component15Table);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
