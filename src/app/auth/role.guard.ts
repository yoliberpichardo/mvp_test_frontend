import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserRole } from '../interfaces/user.interface';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles = route.data['roles'] as UserRole[];
  const user = authService.currentUserValue;

  if (user && expectedRoles.includes(user.role)) {
    return true;
  }

  router.navigate(['/products']);
  return false;
};
