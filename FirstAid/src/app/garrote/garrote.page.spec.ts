import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrotePage } from './garrote.page';

describe('GarrotePage', () => {
  let component: GarrotePage;
  let fixture: ComponentFixture<GarrotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarrotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarrotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
