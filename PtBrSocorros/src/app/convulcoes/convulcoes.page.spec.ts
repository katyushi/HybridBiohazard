import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvulcoesPage } from './convulcoes.page';

describe('ConvulcoesPage', () => {
  let component: ConvulcoesPage;
  let fixture: ComponentFixture<ConvulcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvulcoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvulcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
