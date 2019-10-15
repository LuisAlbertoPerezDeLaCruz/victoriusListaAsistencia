import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarViaFormularioPage } from './marcar-via-formulario.page';

describe('MarcarViaFormularioPage', () => {
  let component: MarcarViaFormularioPage;
  let fixture: ComponentFixture<MarcarViaFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarViaFormularioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarViaFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
