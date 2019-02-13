import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPrepareABasicFirstAidKitPage } from './how-to-prepare-a-basic-first-aid-kit.page';

describe('HowToPrepareABasicFirstAidKitPage', () => {
  let component: HowToPrepareABasicFirstAidKitPage;
  let fixture: ComponentFixture<HowToPrepareABasicFirstAidKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToPrepareABasicFirstAidKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPrepareABasicFirstAidKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
