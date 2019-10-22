import { TestBed } from '@angular/core/testing';

import { ApiFolderService } from './api-folder.service';

describe('ApiFolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFolderService = TestBed.get(ApiFolderService);
    expect(service).toBeTruthy();
  });
});
