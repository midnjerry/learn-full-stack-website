import { TestBed } from '@angular/core/testing';

import { BeautifyCodeService } from './beautify-code.service';

describe('BeautifyCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeautifyCodeService = TestBed.get(BeautifyCodeService);
    expect(service).toBeTruthy();
  });
});
