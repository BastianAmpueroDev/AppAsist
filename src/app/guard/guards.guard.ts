import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  const AuthService = inject(AuthServiceService);
  const router = inject(Router);

  if(AuthService.isLoggedIn()){
    return true;
  }else{
    return router.createUrlTree(['/login']);
  }
};
