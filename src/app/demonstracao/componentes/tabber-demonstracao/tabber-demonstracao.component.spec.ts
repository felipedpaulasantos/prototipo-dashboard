import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabberDemonstracaoComponent } from './tabber-demonstracao.component';

describe('TabberDemonstracaoComponent', () => {
  let component: TabberDemonstracaoComponent;
  let fixture: ComponentFixture<TabberDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabberDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabberDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
