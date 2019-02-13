import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnsPage } from './burns.page';

describe('BurnsPage', () => {
  let component: BurnsPage;
  let fixture: ComponentFixture<BurnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
