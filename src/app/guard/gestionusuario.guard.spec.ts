import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestionusuarioGuard } from './gestionusuario.guard';

describe('gestionusuarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gestionusuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
