import { TestBed } from "@angular/core/testing";

import { DemoResolver } from "./demo-resolver";

describe("DemoResolver", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DemoResolver = TestBed.get(DemoResolver);
    expect(service).toBeTruthy();
  });
});
