import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cx-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeViewComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  @Input() htmlTabId: string;
  @Input() htmlCode: string;

  @Input() tsTabId: string;
  @Input() tsCode: string;

  @Input() cssTabId: string;
  @Input() cssCode: string;

  ngOnInit(): void {
  }

  copiarConteudo(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.info('Conteúdo copiado!', null, { positionClass: "toast-bottom-center", progressBar: false, timeOut: 3000 });
  }

}
