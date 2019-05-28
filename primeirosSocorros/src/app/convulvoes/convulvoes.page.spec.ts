import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvulvoesPage } from './convulvoes.page';

describe('ConvulvoesPage', () => {
  let component: ConvulvoesPage;
  let fixture: ComponentFixture<ConvulvoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvulvoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvulvoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
