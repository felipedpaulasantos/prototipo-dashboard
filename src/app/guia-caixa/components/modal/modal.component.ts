import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ViewContainerRef,
  ComponentRef,
  Injector,
  Type,
  OnDestroy,
  ViewRef
} from "@angular/core";
import { Subscription } from "rxjs";
import { ModalService } from "../../services/modal.service";
import { ModalOptions, ModalSize, defaultModalOptions } from "./modal-options";

declare var $;

@Component({
  selector: "cx-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
  ) { }

  @ViewChild("modalDinamico", { read: ViewContainerRef, static: false })
  modalDinamicoRef: ViewContainerRef;

  componenteParaInjetar: Type<Component>;
  // componenteParaInjetar: any;
  injectorDoComponenteParaInjetar: Injector;
  contextoSubscription: Subscription;

  componenteInjetadoRef: ComponentRef<Component>;
  injectorComponenteInjetado: Injector;

  componenteParaInjetarRef: ComponentRef<any>;

  modalSize = ModalSize;

  @ViewChild("defaultModal", { static: true })
  private modal: ElementRef<HTMLInputElement>;

  public titulo: String = "";
  public mensagem: String = "";

  public btOkTexto: String = "Ok";
  public btCancelarTexto: String = "Fechar";

  public showCancelar = false;

  public classTitulo = "text-principal";

  public btnOkClass = "btn btn-accent";
  public btnCancelarClass = "btn btn-cancel";

  public modalDialogClass = "modal-lg";
  public modalBodyClass = "";
  public modalHeaderClass = "bg-accent";
  public modalFooterClass = "";

  public centralizado = false;
  public tamanho = ModalSize.NORMAL;

  ngOnInit() {
    this.modalService.showEvent.subscribe((options: ModalOptions) => {
      this.config(options);
      this.show();
    });

    this.contextoSubscription = this.modalService.contextoInjecaoGenerico$.subscribe(contexto => {
      this.componentFactoryResolver = contexto.resolver;
      this.injectorDoComponenteParaInjetar = contexto.injector;
      this.componenteParaInjetar = contexto.componenteParaInjetar;
      this.injetarComponenteGenerico();
    });

    this.contextoSubscription = this.modalService.contextoInjecaoInstanciado$.subscribe(
      (componentRef) => {
        this.componenteParaInjetarRef = componentRef;
        this.injetarComponenteInstanciado();
      });
  }

  private injetarComponenteGenerico() {

    if (!this.componenteParaInjetar) {
      this.clearComponent();
    }
    if (!this.injectorDoComponenteParaInjetar || !this.componentFactoryResolver) {
      return;
    }
    if (this.componenteInjetadoRef && this.componenteInjetadoRef.componentType
      && (this.componenteParaInjetar.toString() === this.componenteInjetadoRef.componentType.toString())) {
      return;
    }
    this.clearComponent();
    const componentType = this.componenteParaInjetar;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.injectorComponenteInjetado = Injector.create(
      [{ provide: componentType, useValue: componentType }],
      this.injectorDoComponenteParaInjetar
    );
    this.componenteInjetadoRef = this.modalDinamicoRef.createComponent(
      componentFactory, 0, this.injectorComponenteInjetado
    );

    this.componenteInjetadoRef.changeDetectorRef.detectChanges();
  }

  private injetarComponenteInstanciado() {
    this.clearComponent();
    this.modalDinamicoRef.insert(this.componenteParaInjetarRef.hostView);
    this.componenteParaInjetarRef.changeDetectorRef.detectChanges();
  }

  private clearComponent() {
    this.modalDinamicoRef.clear();
    if (this.componenteInjetadoRef) {
      this.componenteInjetadoRef.destroy();
      this.componenteInjetadoRef = null;
    }
  }

  private clearContext() {
    this.componentFactoryResolver = null;
    this.injectorDoComponenteParaInjetar = null;
  }

  ngOnDestroy() {
    this.contextoSubscription.unsubscribe();
    this.clearComponent();
  }

  config(options: ModalOptions) {
    this.titulo = options.titulo || defaultModalOptions.titulo;
    this.mensagem = options.mensagem || defaultModalOptions.mensagem;
    this.btOkTexto = options.btOkTexto || defaultModalOptions.btOkTexto;
    this.btnOkClass = options.btnOkClass || defaultModalOptions.btnOkClass;

    this.btnCancelarClass = options.btnCancelarClass || defaultModalOptions.btnCancelarClass;
    this.btCancelarTexto = options.btCancelarTexto || defaultModalOptions.btCancelarTexto;

    this.showCancelar = options.showCancelar;
    this.classTitulo = options.classTitulo || defaultModalOptions.classTitulo;

    this.centralizado = options.centralizado;
    this.tamanho = (options.tamanho != undefined && options.tamanho != null) ? options.tamanho : defaultModalOptions.tamanho;

    this.modalBodyClass = options.modalBodyClass || defaultModalOptions.modalBodyClass;
    this.modalHeaderClass = options.modalHeaderClass || defaultModalOptions.modalHeaderClass;
    this.modalFooterClass = options.modalFooterClass || defaultModalOptions.modalFooterClass;
  }

  public show() {
    $(this.modal.nativeElement).modal("show");
  }

  public cancelar() {
    this.modalService.btCancelarEvent.emit(true);
  }

  public ok() {
    this.modalService.btOKEvent.emit(true);
  }
}
