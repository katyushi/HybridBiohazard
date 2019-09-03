import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvdigcomidaPage } from './envdigcomida.page';

describe('EnvdigcomidaPage', () => {
  let component: EnvdigcomidaPage;
  let fixture: ComponentFixture<EnvdigcomidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvdigcomidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvdigcomidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
