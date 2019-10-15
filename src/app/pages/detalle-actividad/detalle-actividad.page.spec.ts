import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActividadPage } from './detalle-actividad.page';

describe('DetalleActividadPage', () => {
  let component: DetalleActividadPage;
  let fixture: ComponentFixture<DetalleActividadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleActividadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
