import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoTemplateComponent } from './documentacao-template.component';

describe('DocumentacaoTemplateComponent', () => {
  let component: DocumentacaoTemplateComponent;
  let fixture: ComponentFixture<DocumentacaoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentacaoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentacaoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
