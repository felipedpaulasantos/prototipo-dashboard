import { throwError, Subject } from "rxjs";

import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  buscarUsuario() {
    return this.http.get(environment.apiUrl + "/usuario").pipe(
      map(response => {
        return response;
      })

      // catchError( err =>
      //   throwError(err)
      // )
    );
  }

  cadastrarOuAtualizarUsuario(usuario) {
    return this.http.post(environment.apiUrl + "/usuario", usuario).pipe(
      map(response => {
        return response;
      }),

      catchError(err => throwError(err))
    );
  }

  get perfil(): BehaviorSubject<any> {
    return this._user;
  }

  setPerfilFromIdentityClaims(identityClaims: any) {
    if (identityClaims) {
      const user = {
        nome: identityClaims.name,
        matricula: identityClaims.preferred_username
      };
      this._user.next(user);
    }
  }

  hasPermissao(roles: any) {
    if (roles && this.perfil && this.perfil.value) {
      const found = this.perfil.value.roles.some(r => roles.includes(r));
      if (found) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
