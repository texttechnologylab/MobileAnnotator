import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemAF } from './sem-af.component';

describe('SemAF', () => {
  let component: SemAF;
  let fixture: ComponentFixture<SemAF>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemAF ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemAF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
