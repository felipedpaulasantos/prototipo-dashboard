export enum ModalSize {
  NORMAL = "",
  PEQUENO = "modal-sm",
  GRANDE = "modal-lg",
  MAIOR = "modal-xl"
}

export const defaultModalOptions: ModalOptions = {
  titulo: "",
  mensagem: "",
  btOkTexto: "Ok",
  btCancelarTexto: "Fechar",
  showCancelar: false,
  classTitulo: "subtitulo",
  btnOkClass: "btn btn-accent",
  btnCancelarClass: "btn btn-cancel",
  modalBodyClass: "",
  modalHeaderClass: "bg-accent text-base",
  modalFooterClass: "",
  centralizado: false,
  tamanho: ModalSize.NORMAL
};

export interface ModalOptions {
  titulo?: string;
  mensagem?: string;
  btOkTexto?: string;
  btCancelarTexto?: string;
  showCancelar?: boolean;
  classTitulo?: string;
  btnOkClass?: string;
  btnCancelarClass?: string;
  centralizado?: boolean;
  tamanho?: ModalSize;
  modalHeaderClass?: string;
  modalBodyClass?: string;
  modalFooterClass?: string;
}
