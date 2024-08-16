import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorListaComponent } from './colaborador-lista.component';

describe('ColaboradorListaComponent', () => {
  let component: ColaboradorListaComponent;
  let fixture: ComponentFixture<ColaboradorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboradorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
