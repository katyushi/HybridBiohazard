import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpPage } from './foodp.page';

describe('FoodpPage', () => {
  let component: FoodpPage;
  let fixture: ComponentFixture<FoodpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
