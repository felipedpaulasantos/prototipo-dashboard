import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { ModalService } from "src/app/guia-caixa/services/modal.service";

import { ComponentesInterface } from "../../componentes/componentes-interface";
import { ModalSize } from "src/app/guia-caixa/components/modal/modal-options";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";

@Component({
  selector: "app-mensagens",
  templateUrl: "./mensagens.component.html",
  styleUrls: ["./mensagens.component.css"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class MensagensComponent extends ComponentesInterface implements OnInit {

  modalSize = ModalSize;

  constructor(
    public toastr: ToastrService,
    public spinner: NgxSpinnerService,
    private modalService: ModalService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelMensagens";

  navItems: CodeFixedNavItem[] = [
    { id: "painelMensagens", name: "Notificações" },
    { id: "painelModal", name: "Modais" },
    { id: "painelSpinner", name: "Carregamento" }
  ];

  htmlCodeMensagens = `        <button class="btn btn-success" (click)="exibirSucesso()">
  Sucesso!
</button> &nbsp;

<button class="btn btn-danger" (click)="exibirErro()">
  Erro!
</button> &nbsp;

<button class="btn btn-alerta" (click)="exibirAlerta()">
  Alerta!
</button> &nbsp;

<button class="btn btn-info" (click)="exibirInfo()">
  Informação!
</button> &nbsp;`.trim();
  tsCodeMensagens = `  import { Component } from '@angular/core';
  import { ToastrService } from 'ngx-toastr';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private toastr: ToastrService
    ) {}

    exibirSucesso() {
      this.toastr.success('Sucesso!');
    }

    exibirErro() {
      this.toastr.error('Ocorreu um erro!', 'Erro!');
    }

    exibirAlerta() {
      this.toastr.warning('Alerta!', null, { positionClass: 'toast-top-right', progressBar: false });
    }

    exibirInfo() {
      this.toastr.info('Informação!', 'Importante!', { positionClass: 'toast-bottom-right', progressBar: false });
    }
  }
  `.trimRight();

  htmlCodeSpinner = `        <button class="btn btn-outline-dark" (click)="exibirSpinner()">
  Mostrar tela de carregamento
</button>`.trim();
  tsCodeSpinner = `  import { Component } from '@angular/core';
  import { NgxSpinnerService } from 'ngx-spinner';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private spinner: NgxSpinnerService
    ) {}

    exibirSpinner() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }
  }
  `.trimRight();

  htmlCodeModal = `        <button class="btn btn-outline-dark" (click)="exibirModal()">
  <i class="fa fa-lg fa-external-link-alt mr-2"></i>
  Mostrar modal
</button>`.trim();
  tsCodeModal = `  import { Component } from '@angular/core';
  import { ModalService } from 'src/app/shared/services/modal.service';
  import { ModalSize } from 'src/app/shared/components/modal/modal-options';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private modalService: ModalService
    ) {}

    exibirModal() {
      this.modalService.show({
        showCancelar: true,
        classTitulo: "",
        titulo: "Título do modal",
        mensagem: "Mensagem do modal"
      });
    }
  }
  `.trimRight();

  tamanhoModal = ModalSize.NORMAL;

  ngOnInit() {
  }

  exibirSucesso() {
    this.toastr.success("Sucesso!", "", { disableTimeOut: true });
  }

  exibirErro() {
    this.toastr.error("Ocorreu um erro!", "Erro!", { disableTimeOut: true });
  }

  exibirAlerta() {
    this.toastr.warning("Alerta!", null, { disableTimeOut: true });
/*     this.toastr.warning("Alerta!", null, { positionClass: "toast-top-right", progressBar: false, disableTimeOut: true }); */
  }

  exibirInfo() {
    this.toastr.info("Informação!", "Importante!", { disableTimeOut: true });
  }

  exibirSpinner() {
    this.spinner.show("global");
    setTimeout(() => {
      this.spinner.hide("global");
    }, 3000);
  }

  showTesteModal(titulo?: string, mensagem?: string, tamanho?: ModalSize, centro?: boolean) {
    this.modalService.show({
      showCancelar: true,
      classTitulo: "",
      titulo: titulo || "Título do modal",
      mensagem: mensagem || "Mensagem do modal",
      centralizado: centro,
      tamanho: tamanho
    });
  }

  exibirModal() {
    this.modalService.show({
      showCancelar: true,
      titulo: "Título do modal",
      mensagem: "Mensagem do modal",
      btOkTexto: "OK",
      centralizado: true
    });
  }

}
