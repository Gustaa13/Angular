import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

  const routte = new Router;

  if(localStorage.getItem('name') === 'Gustavo') {
    return true;
  } else {
    routte.navigateByUrl('');
    return false;
  }
  
};
