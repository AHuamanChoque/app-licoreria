import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorListaComponent } from './proveedor-lista.component';

describe('ProveedorListaComponent', () => {
  let component: ProveedorListaComponent;
  let fixture: ComponentFixture<ProveedorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
