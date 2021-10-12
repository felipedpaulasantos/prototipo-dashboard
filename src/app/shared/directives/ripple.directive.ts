import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cx-ripple]'
})
export class RippleDirective implements AfterContentInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterContentInit(): void {
    this.renderer.setStyle(this.el.nativeElement, "position", "relative");
    this.renderer.setStyle(this.el.nativeElement, "overflow", "hidden");
  }

  @HostListener('click', ['$event'])
  onClick(ev: any) {
    const children = this.el.nativeElement.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains("cx-ripple")) {
        this.renderer.removeChild(this.el.nativeElement, child);
      }
    }

    const circle = this.document.createElement('div');
    this.renderer.appendChild(this.el.nativeElement, circle);

    const diametro = Math.max(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    this.renderer.setStyle(circle, "width", diametro + 'px');
    this.renderer.setStyle(circle, "height", diametro + 'px');

    const offset = this.getOffset();
/*     this.renderer.setStyle(circle, "left", ev.pageX - offset.left - (diametro / 2) + 'px'); */
    this.renderer.setStyle(circle, "left", 0);
    this.renderer.setStyle(circle, "top", ev.pageY - offset.top - (diametro / 2) + 'px');

    const rippleColor = this.setRippleColor();
    this.renderer.setStyle(circle, "background-color", rippleColor);
    this.renderer.addClass(circle, "cx-ripple");
  }

  setRippleColor(): string {
    const hexcolor = window.getComputedStyle
      ? window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("background-color")
      : this.el.nativeElement.style.backgroundColor;

    const rgb: string[] = hexcolor
      .replace("rgba", "").replace("rgb", "").replace("(", "").replace(")", "")
      .split(",");

    const r = parseInt(rgb[0].trim());
    const g = parseInt(rgb[1].trim());
    const b = parseInt(rgb[2].trim());

    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (yiq >= 128) ? ' rgba(0, 0, 0, 0.2)' : "rgba(255, 255, 255, 0.7)";
  }

  getOffset() {
    let elem = this.el.nativeElement;
    let x = elem.offsetLeft;
    let y = elem.offsetTop;

    while (elem = elem.offsetParent) {
      x += elem.offsetLeft;
      y += elem.offsetTop;
    }
    return { left: x, top: y };
  }

}
