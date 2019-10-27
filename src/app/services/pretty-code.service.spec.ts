import { TestBed } from '@angular/core/testing';

import { PrettyCodeService } from './pretty-code.service';

describe('PrettyCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrettyCodeService = TestBed.get(PrettyCodeService);
    expect(service).toBeTruthy();
  });
});
