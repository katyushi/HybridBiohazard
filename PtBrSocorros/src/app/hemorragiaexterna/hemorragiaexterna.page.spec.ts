import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemorragiaexternaPage } from './hemorragiaexterna.page';

describe('HemorragiaexternaPage', () => {
  let component: HemorragiaexternaPage;
  let fixture: ComponentFixture<HemorragiaexternaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemorragiaexternaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemorragiaexternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
