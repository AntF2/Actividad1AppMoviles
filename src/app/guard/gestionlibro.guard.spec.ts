import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestionlibroGuard } from './gestionlibro.guard';

describe('gestionlibroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gestionlibroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
