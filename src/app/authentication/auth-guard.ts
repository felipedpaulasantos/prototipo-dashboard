import { Role } from '../users/role';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserService } from '../users/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  roles: Role;

  constructor(
    private oauthService: OAuthService,
    private toastrService: ToastrService,
    private userService: UserService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.oauthService.hasValidAccessToken()) {

      const perfil = this.userService.perfil.value;
      const rolesRouter = next.data.roles;

      if (perfil) {
        return true;
      } else {
        this.toastrService.error('Você não tem perfil para acessar essa funcionalidade!');
        return false;
      }

    } else {
        this.oauthService.initImplicitFlow();
        return false;
    }
  }

  hasRoleRouter(perfil: any, rolesRouter: any): boolean {

    const found = perfil.roles.some(r => rolesRouter.includes(r));
    if (found) {
        return true;
    } else {
        return false;
    }
  }
}
