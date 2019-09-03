import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorniquetePage } from './torniquete.page';

describe('TorniquetePage', () => {
  let component: TorniquetePage;
  let fixture: ComponentFixture<TorniquetePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorniquetePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorniquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
