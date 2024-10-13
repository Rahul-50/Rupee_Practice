import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const data = sessionStorage.getItem('userdata');
  debugger;
  if (data == null) {
    router.navigateByUrl('/login');
    return false;
  } else {
    return true;

  }
};
