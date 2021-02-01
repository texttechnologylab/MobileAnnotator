import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentholderComponent } from './contentholder.component';

describe('ContentholderComponent', () => {
  let component: ContentholderComponent;
  let fixture: ComponentFixture<ContentholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
