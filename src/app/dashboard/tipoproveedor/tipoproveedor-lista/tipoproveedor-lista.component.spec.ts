import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproveedorListaComponent } from './tipoproveedor-lista.component';

describe('TipoproveedorListaComponent', () => {
  let component: TipoproveedorListaComponent;
  let fixture: ComponentFixture<TipoproveedorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoproveedorListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoproveedorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
