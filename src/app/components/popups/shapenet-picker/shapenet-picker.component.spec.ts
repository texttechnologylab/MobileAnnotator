import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapenetPickerComponent } from './shapenet-picker.component';

describe('ShapenetPickerComponent', () => {
  let component: ShapenetPickerComponent;
  let fixture: ComponentFixture<ShapenetPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapenetPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapenetPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
