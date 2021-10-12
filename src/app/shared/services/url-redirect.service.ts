import { Injectable } from "@angular/core";
import { ActivatedRoute, Router, UrlTree } from "@angular/router";
import { BehaviorSubject, of, zip } from "rxjs";
import { RedirectParams } from "../model/redirect-params.model";

@Injectable({
  providedIn: "root"
})
export class UrlRedirectService {

  constructor(
    private router: Router
  ) { }

  private redirectParamsSource = new BehaviorSubject<RedirectParams>(null);
  public redirectParams$ = this.redirectParamsSource.asObservable();

  public setRedirectParams(route: ActivatedRoute, urlTree: UrlTree): void {
    const urlFull = urlTree.toString();
    urlTree.queryParams = {};
    const urlNoParam = urlTree.toString();
    zip(route.queryParams, of(urlNoParam))
    .subscribe((paramsConcat) => {
        const params = paramsConcat[0];
        const url = paramsConcat[1];
        const redirectParams: RedirectParams = {
          cpfCnpj: params.cpfCnpj,
          origem: params.origem,
          urlFull: urlFull,
          urlNoParams: urlNoParam,
          target: params.target
        };
        if (!redirectParams.target) { return; }
        this.redirectParamsSource.next(redirectParams);
        this.router.navigateByUrl(redirectParams.target);
      }
    );
  }

}
