import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCaixaComponent } from './select-caixa.component';

describe('SelectCaixaComponent', () => {
  let component: SelectCaixaComponent;
  let fixture: ComponentFixture<SelectCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
