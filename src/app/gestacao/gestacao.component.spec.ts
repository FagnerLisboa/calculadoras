import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestacaoComponent } from './gestacao.component';

describe('GestacaoComponent', () => {
  let component: GestacaoComponent;
  let fixture: ComponentFixture<GestacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
