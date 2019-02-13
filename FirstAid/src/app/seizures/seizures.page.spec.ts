import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeizuresPage } from './seizures.page';

describe('SeizuresPage', () => {
  let component: SeizuresPage;
  let fixture: ComponentFixture<SeizuresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeizuresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeizuresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
