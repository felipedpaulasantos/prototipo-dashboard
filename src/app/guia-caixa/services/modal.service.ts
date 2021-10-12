import { Injectable, EventEmitter, Output, ComponentFactoryResolver, Injector, ComponentRef } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ContextoInjecaoComponente } from "src/app/menu/side-menu/contexto-injecao-componente";
import { ModalOptions } from "../components/modal/modal-options";

declare var $;

@Injectable({
  providedIn: "root"
})
export class ModalService {

  private contextoInjecaoGenericoSource = new Subject<ContextoInjecaoComponente>();
  contextoInjecaoGenerico$ = this.contextoInjecaoGenericoSource.asObservable();

  private contextoInjecaoInstanciadoSource = new Subject<ComponentRef<any>>();
  contextoInjecaoInstanciado$ = this.contextoInjecaoInstanciadoSource.asObservable();

  private limparModalDinamicoSource = new BehaviorSubject<boolean>(false);
  limparModalDinamico$ = this.limparModalDinamicoSource.asObservable();

  private injetarModalDinamicoSource = new BehaviorSubject<boolean>(false);
  injetarModalDinamico$$ = this.injetarModalDinamicoSource.asObservable();

  showEvent: EventEmitter<any> = new EventEmitter();

  btOKEvent: EventEmitter<boolean> = new EventEmitter();

  btCancelarEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public show(options?: ModalOptions) {
    this.showEvent.emit(options || {});
  }

  public limpar(): void {
    this.limparModalDinamicoSource.next(true);
    this.limparModalDinamicoSource.next(false);
  }

  public injetar(): void {
    this.injetarModalDinamicoSource.next(true);
    this.injetarModalDinamicoSource.next(false);
  }

  public receberContexto(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, componenteParaInjetar?: any) {
    this.contextoInjecaoGenericoSource.next({
      resolver: componentFactoryResolver, injector: injector, componenteParaInjetar: componenteParaInjetar
    });
  }

  public receberContextoInstanciado(componenteRef: ComponentRef<any>) {
    this.contextoInjecaoInstanciadoSource.next(componenteRef);
  }

}
