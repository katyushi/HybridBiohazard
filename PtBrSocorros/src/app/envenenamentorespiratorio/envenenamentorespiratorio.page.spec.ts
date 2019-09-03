import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvenenamentorespiratorioPage } from './envenenamentorespiratorio.page';

describe('EnvenenamentorespiratorioPage', () => {
  let component: EnvenenamentorespiratorioPage;
  let fixture: ComponentFixture<EnvenenamentorespiratorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvenenamentorespiratorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvenenamentorespiratorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
