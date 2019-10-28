import { TestBed } from '@angular/core/testing';

import { DemoResolverService } from './demo-resolver';

describe('DemoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoResolverService = TestBed.get(DemoResolverService);
    expect(service).toBeTruthy();
  });
});
