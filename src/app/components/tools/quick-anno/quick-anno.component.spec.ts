import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAnnoComponent } from './quick-anno.component';

describe('QuickAnnoComponent', () => {
  let component: QuickAnnoComponent;
  let fixture: ComponentFixture<QuickAnnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAnnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
