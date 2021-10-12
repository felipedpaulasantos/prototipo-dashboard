import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaixaComponent } from './card-caixa.component';

describe('CardCaixaComponent', () => {
  let component: CardCaixaComponent;
  let fixture: ComponentFixture<CardCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
