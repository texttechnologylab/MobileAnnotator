import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentholderComponentSemAF } from './contentholder.component';

describe('ContentholderComponentSemAF', () => {
  let component: ContentholderComponentSemAF;
  let fixture: ComponentFixture<ContentholderComponentSemAF>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentholderComponentSemAF ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentholderComponentSemAF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
