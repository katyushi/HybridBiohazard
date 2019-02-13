import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalBleedingPage } from './internal-bleeding.page';

describe('InternalBleedingPage', () => {
  let component: InternalBleedingPage;
  let fixture: ComponentFixture<InternalBleedingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalBleedingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalBleedingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
