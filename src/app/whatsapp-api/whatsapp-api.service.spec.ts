import { TestBed } from '@angular/core/testing';

import { WhatsappApiService } from './whatsapp-api.service';

describe('WhatsappApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhatsappApiService = TestBed.get(WhatsappApiService);
    expect(service).toBeTruthy();
  });
});
