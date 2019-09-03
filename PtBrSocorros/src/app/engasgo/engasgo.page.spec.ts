import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngasgoPage } from './engasgo.page';

describe('EngasgoPage', () => {
  let component: EngasgoPage;
  let fixture: ComponentFixture<EngasgoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngasgoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngasgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
