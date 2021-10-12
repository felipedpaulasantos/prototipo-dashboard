import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMessagesComponent } from './reports-messages.component';

describe('ReportsMessagesComponent', () => {
  let component: ReportsMessagesComponent;
  let fixture: ComponentFixture<ReportsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
