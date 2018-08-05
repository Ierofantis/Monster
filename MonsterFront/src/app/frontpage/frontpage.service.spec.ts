import { TestBed, inject } from '@angular/core/testing';

import { FrontpageService } from './frontpage.service';

describe('FrontpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontpageService]
    });
  });

  it('should be created', inject([FrontpageService], (service: FrontpageService) => {
    expect(service).toBeTruthy();
  }));
});
