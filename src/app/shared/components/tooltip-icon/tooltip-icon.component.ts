import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-icon',
  template: `<span
    class="text-link-dark ml-2"
    role="button"
    onmouseenter="$(this).tooltip('show')"
    data-toggle="top"
    data-html="true"
    [title]="text">
      <i class="fas fa-info-circle fa-lg"></i>
  </span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipIconComponent implements OnInit {

  constructor() { }

  @Input() text: String = '';

  ngOnInit() {
  }

}
