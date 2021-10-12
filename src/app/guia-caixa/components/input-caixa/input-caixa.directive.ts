import { Directive, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
	selector: '[inputCaixa]'
})
export class InputCaixaDirective {

	private keyPressed = new BehaviorSubject<number>(0);
	element: ElementRef;
	keyPressed$ = this.keyPressed.asObservable();
	focused = false;
	changed = false;

	constructor(element: ElementRef) {
		this.element = element;
	}

	@HostListener("keypress")
	onKeyPressed(keyPress?) {
		this.keyPressed.next(keyPress);
	}

	@HostListener("change")
	onChange() {
		this.changed = true;
	}

	@HostListener("focus")
	onFocus() {
		this.focused = true;
	}

	@HostListener("blur")
	onBlur() {
		this.focused = false;
	}
}
