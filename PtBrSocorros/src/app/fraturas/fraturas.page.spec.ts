import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraturasPage } from './fraturas.page';

describe('FraturasPage', () => {
  let component: FraturasPage;
  let fixture: ComponentFixture<FraturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraturasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
