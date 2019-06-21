import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsPage } from './meds.page';

describe('MedsPage', () => {
  let component: MedsPage;
  let fixture: ComponentFixture<MedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
