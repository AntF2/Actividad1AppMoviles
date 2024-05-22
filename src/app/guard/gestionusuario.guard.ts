import { CanActivateFn } from '@angular/router';

export const gestionusuarioGuard: CanActivateFn = (route, state) => {
 if (localStorage.getItem('token') == 'true') {
   return false;
 } else {
   return true;
 }
};
