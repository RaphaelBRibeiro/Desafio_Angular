import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const email = sessionStorage.getItem("email")

  if (!email){
    alert ("Usuario não está autenticado")
    router.navigate([""])
    return false
  }
  
  return true;
};
 