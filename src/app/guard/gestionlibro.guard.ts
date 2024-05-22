import { CanActivateFn } from '@angular/router';

export const gestionlibroGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token') == 'true') {
    return false;
  } else {
    return true;
  }
};
