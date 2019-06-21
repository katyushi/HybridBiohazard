import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigestivePoisoningPage } from './digestive-poisoning.page';

describe('DigestivePoisoningPage', () => {
  let component: DigestivePoisoningPage;
  let fixture: ComponentFixture<DigestivePoisoningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigestivePoisoningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestivePoisoningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
