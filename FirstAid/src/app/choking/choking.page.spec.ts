import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChokingPage } from './choking.page';

describe('ChokingPage', () => {
  let component: ChokingPage;
  let fixture: ComponentFixture<ChokingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChokingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChokingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
