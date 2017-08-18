import { TestBed, inject } from '@angular/core/testing';

import { TextFileParserService } from './text-file-parser.service';

describe('TextFileParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextFileParserService]
    });
  });

  it('should be created', inject([TextFileParserService], (service: TextFileParserService) => {
    expect(service).toBeTruthy();
  }));
});
