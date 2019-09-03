import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoshomePage } from './topicoshome.page';

describe('TopicoshomePage', () => {
  let component: TopicoshomePage;
  let fixture: ComponentFixture<TopicoshomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicoshomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicoshomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
