import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisoningPage } from './poisoning.page';

describe('PoisoningPage', () => {
  let component: PoisoningPage;
  let fixture: ComponentFixture<PoisoningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoisoningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisoningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
