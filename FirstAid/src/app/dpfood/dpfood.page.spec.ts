import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpfoodPage } from './dpfood.page';

describe('DpfoodPage', () => {
  let component: DpfoodPage;
  let fixture: ComponentFixture<DpfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
