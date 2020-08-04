import { TestBed } from '@angular/core/testing';

import { SrvNewsService } from './srv-news.service';

describe('SrvNewsService', () => {
  let service: SrvNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
