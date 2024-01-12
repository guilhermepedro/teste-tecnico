import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarMedicoComponent } from './adicionar-editar-medico.component';

describe('AdicionarEditarMedicoComponent', () => {
  let component: AdicionarEditarMedicoComponent;
  let fixture: ComponentFixture<AdicionarEditarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEditarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
