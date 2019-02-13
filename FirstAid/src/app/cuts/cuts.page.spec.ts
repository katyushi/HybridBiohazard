import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutsPage } from './cuts.page';

describe('CutsPage', () => {
  let component: CutsPage;
  let fixture: ComponentFixture<CutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
