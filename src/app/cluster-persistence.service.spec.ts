import { TestBed, inject } from '@angular/core/testing';

import { ClusterPersistenceService } from './cluster-persistence.service';

describe('ClusterPersistenceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClusterPersistenceService]
    });
  });

  it('should ...', inject([ClusterPersistenceService], (service: ClusterPersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
