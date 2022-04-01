import { TestBed } from '@angular/core/testing';

import { FriendRelationService } from './friend-relation.service';

describe('FriendRelationService', () => {
  let service: FriendRelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendRelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
