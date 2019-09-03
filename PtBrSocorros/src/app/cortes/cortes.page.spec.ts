import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesPage } from './cortes.page';

describe('CortesPage', () => {
  let component: CortesPage;
  let fixture: ComponentFixture<CortesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
