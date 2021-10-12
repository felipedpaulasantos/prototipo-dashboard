import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMenuComponent } from './busca-menu.component';

describe('BuscaMenuComponent', () => {
  let component: BuscaMenuComponent;
  let fixture: ComponentFixture<BuscaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
