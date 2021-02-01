import { TestBed, async, inject } from '@angular/core/testing';

import { ToolGuard } from './tool.guard';

describe('ToolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolGuard]
    });
  });

  it('should ...', inject([ToolGuard], (guard: ToolGuard) => {
    expect(guard).toBeTruthy();
  }));
});
