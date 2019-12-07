import { TestBed } from '@angular/core/testing';

import { MetrocardsService } from './metrocards.service';

describe('MetrocardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetrocardsService = TestBed.get(MetrocardsService);
    expect(service).toBeTruthy();
  });
});
