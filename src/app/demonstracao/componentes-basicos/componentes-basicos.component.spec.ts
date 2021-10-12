import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBasicosComponent } from './componentes-basicos.component';

describe('ComponentesBasicosComponent', () => {
  let component: ComponentesBasicosComponent;
  let fixture: ComponentFixture<ComponentesBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
