import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelComponent } from './combustivel.component';

describe('CombustivelComponent', () => {
  let component: CombustivelComponent;
  let fixture: ComponentFixture<CombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
