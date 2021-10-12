import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cx-busca-menu',
  templateUrl: './busca-menu.component.html',
  styleUrls: ['./busca-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuscaMenuComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  show = false;

  cliente0 = { nome: "Fernando Fernandes", cpf: "298.110.299-45", active: false };
  cliente1 = { nome: "João da Silva", cpf: "225.845.302-85", active: false };
  cliente2 = { nome: "Maria Joaquina de Jesus", cpf: "008.451.352-89", active: false };
  cliente3 = { nome: "Francisvaldo Almeida", cpf: "058.491.215-00", active: false };
  cliente4 = { nome: "Juvenilda Aparecida", cpf: "897.880.519-02", active: false };
  cliente5 = { nome: "Ludovico Napoleão", cpf: "123.456.789-01", active: false };

  clientesConsultados: any[] = [];

  ngOnInit(): void {
    this.cliente1.active = true;
    this.clientesConsultados = [this.cliente0, this.cliente1, this.cliente2];
  }

  buscarCliente() {

    if (this.clientesConsultados.length == 6) {
      return this.toastr.warning("Limite de clientes alcançado");
    }

    this.spinner.show("global");
    switch (this.clientesConsultados.length) {
      case 0:
        this.clientesConsultados.push(this.cliente0);
        this.trocaCliente(0);
        break;
      case 1:
        this.clientesConsultados.push(this.cliente1);
        this.trocaCliente(1);
        break;
      case 2:
        this.clientesConsultados.push(this.cliente2);
        this.trocaCliente(2);
        break;
      case 3:
        this.clientesConsultados.push(this.cliente3);
        this.trocaCliente(3);
        break;
      case 4:
        this.clientesConsultados.push(this.cliente4);
        this.trocaCliente(4);
        break;
      case 5:
        this.clientesConsultados.push(this.cliente5);
        this.trocaCliente(5);
        break;
    }
    setTimeout(() => {
      this.spinner.hide("global");
    }, 2000);
  }

  trocaCliente(index: number) {
    this.clientesConsultados.forEach((cliente, i) => {
      i == index ? cliente.active = true : cliente.active = false;
    });
  }

  removerCliente(index: number) {
    if (this.clientesConsultados && this.clientesConsultados.length > 0) {
      this.clientesConsultados.pop();
      this.trocaCliente(this.clientesConsultados.length - 1);
    }

  }

}
