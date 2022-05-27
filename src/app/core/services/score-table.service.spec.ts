import { TestBed } from '@angular/core/testing';

import { ScoreTableService } from './score-table.service';

describe('ScoreTableService', () => {
  let service: ScoreTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
