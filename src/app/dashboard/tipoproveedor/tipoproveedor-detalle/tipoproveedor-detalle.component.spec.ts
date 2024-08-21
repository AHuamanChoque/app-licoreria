import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproveedorDetalleComponent } from './tipoproveedor-detalle.component';

describe('TipoproveedorDetalleComponent', () => {
  let component: TipoproveedorDetalleComponent;
  let fixture: ComponentFixture<TipoproveedorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoproveedorDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoproveedorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
