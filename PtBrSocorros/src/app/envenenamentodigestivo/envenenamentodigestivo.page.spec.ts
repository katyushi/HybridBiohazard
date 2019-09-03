import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvenenamentodigestivoPage } from './envenenamentodigestivo.page';

describe('EnvenenamentodigestivoPage', () => {
  let component: EnvenenamentodigestivoPage;
  let fixture: ComponentFixture<EnvenenamentodigestivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvenenamentodigestivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvenenamentodigestivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
