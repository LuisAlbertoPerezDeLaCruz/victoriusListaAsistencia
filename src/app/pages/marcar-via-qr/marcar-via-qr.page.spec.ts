import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarViaQRPage } from './marcar-via-qr.page';

describe('MarcarViaQRPage', () => {
  let component: MarcarViaQRPage;
  let fixture: ComponentFixture<MarcarViaQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarViaQRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarViaQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
