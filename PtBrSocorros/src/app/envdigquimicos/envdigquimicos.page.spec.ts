import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvdigquimicosPage } from './envdigquimicos.page';

describe('EnvdigquimicosPage', () => {
  let component: EnvdigquimicosPage;
  let fixture: ComponentFixture<EnvdigquimicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvdigquimicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvdigquimicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
