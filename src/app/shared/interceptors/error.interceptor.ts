import { Injectable, ViewChild, ViewChildren } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { OAuthService } from "angular-oauth2-oidc";
import { ModalService } from "../../guia-caixa/services/modal.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private oauthService: OAuthService,
    private toastrService: ToastrService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        // console.error(errorResponse);

        switch (errorResponse.status) {
          case 400: {
            this.toastrService.warning(
              errorResponse.error.mensagem ||
                "Ocorreu um erro interno no servidor",
              "Erro"
            );
            break;
          }

          case 401: {
            this.toastrService.error(
              "Você não tem autorização necessária para realizar esta operação."
            );
            break;
          }

          case 403: {
            this.toastrService.warning(
              "É necessário a autenticação do usuário para continuar.",
              "Autenticação Necessária"
            );
            break;
          }

          case 404: {
            this.toastrService.warning(
              "O recurso solicitado não pode ser localizado.",
              "Não Encontrado"
            );
            break;
          }

          case 500: {
            this.toastrService.warning(
              errorResponse.error.mensagem ||
                "Ocorreu um erro interno no servidor",
              "Erro"
            );
            break;
          }

          default: {
            this.toastrService.warning(
              errorResponse.error.mensagem ||
                "O serviço parece estar offline, tente novamente mais tarde.",
              "Erro"
            );
          }
        }

        return throwError(errorResponse);
      })
    );
  }
}
