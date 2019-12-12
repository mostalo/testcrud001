import { TestBed } from '@angular/core/testing';

import { TestsqlService } from './testsql.service';

describe('TestsqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestsqlService = TestBed.get(TestsqlService);
    expect(service).toBeTruthy();
  });
});
