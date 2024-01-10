import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarComponent } from './adicionar-editar.component';

describe('AdicionarEditarComponent', () => {
  let component: AdicionarEditarComponent;
  let fixture: ComponentFixture<AdicionarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
