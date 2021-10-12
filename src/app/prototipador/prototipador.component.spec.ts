import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipadorComponent } from './prototipador.component';

describe('PrototipadorComponent', () => {
  let component: PrototipadorComponent;
  let fixture: ComponentFixture<PrototipadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototipadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
