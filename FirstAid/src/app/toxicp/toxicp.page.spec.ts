import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicpPage } from './toxicp.page';

describe('ToxicpPage', () => {
  let component: ToxicpPage;
  let fixture: ComponentFixture<ToxicpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
