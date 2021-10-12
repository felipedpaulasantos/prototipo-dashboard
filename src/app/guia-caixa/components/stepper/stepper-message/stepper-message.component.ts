import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cx-stepper-message',
  templateUrl: './stepper-message.component.html',
  styleUrls: ['./stepper-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperMessageComponent implements OnInit, OnChanges {

  @Input() show = false;
  @Input() message: string;
  @Input() icon: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdr.detectChanges();
  }

}
