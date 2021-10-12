import { Directive, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
	selector: '[selectCaixa]'
})
export class SelectCaixaDirective {

	private keyPressed = new BehaviorSubject<number>(0);
	element: any;
	keyPressed$ = this.keyPressed.asObservable();
	focus = false;
	changed = false;

	constructor(element: ElementRef) {
		this.element = element.nativeElement;
	}

	@HostListener("change")
	onChange() {
		this.changed = true;
	}

	@HostListener("focus")
	onFocus() {
		this.focus = true;
	}

	@HostListener("blur")
	onBlur() {
		this.focus = false;
	}
}
