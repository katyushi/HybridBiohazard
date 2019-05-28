import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitBasicoPage } from './kit-basico.page';

describe('KitBasicoPage', () => {
  let component: KitBasicoPage;
  let fixture: ComponentFixture<KitBasicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitBasicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitBasicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
