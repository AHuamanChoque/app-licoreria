import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDetalleComponent } from './proveedor-detalle.component';

describe('ProveedorDetalleComponent', () => {
  let component: ProveedorDetalleComponent;
  let fixture: ComponentFixture<ProveedorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
