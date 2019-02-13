import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FracturesPage } from './fractures.page';

describe('FracturesPage', () => {
  let component: FracturesPage;
  let fixture: ComponentFixture<FracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FracturesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
