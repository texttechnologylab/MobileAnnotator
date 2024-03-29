import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSelectComponent } from './document-select.component';

describe('DocumentsComponent', () => {
  let component: DocumentSelectComponent;
  let fixture: ComponentFixture<DocumentSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
