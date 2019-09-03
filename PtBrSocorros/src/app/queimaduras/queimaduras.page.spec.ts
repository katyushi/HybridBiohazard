import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueimadurasPage } from './queimaduras.page';

describe('QueimadurasPage', () => {
  let component: QueimadurasPage;
  let fixture: ComponentFixture<QueimadurasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueimadurasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueimadurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
