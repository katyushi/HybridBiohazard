import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfogamentoPage } from './afogamento.page';

describe('AfogamentoPage', () => {
  let component: AfogamentoPage;
  let fixture: ComponentFixture<AfogamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfogamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfogamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
