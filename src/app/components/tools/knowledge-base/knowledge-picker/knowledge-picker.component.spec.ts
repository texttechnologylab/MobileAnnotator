import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePickerComponent } from './knowledge-picker.component';

describe('KnowledgePickerComponent', () => {
  let component: KnowledgePickerComponent;
  let fixture: ComponentFixture<KnowledgePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
