import { Component, OnInit, ElementRef, AfterContentInit, ViewChild,
  Input, Renderer2, OnDestroy, ViewContainerRef, EventEmitter } from "@angular/core";

@Component({
  selector: "cx-card",
  templateUrl: "./card-caixa.component.html",
  styleUrls: ["./card-caixa.component.scss"],
  host: { "class": "card" }
})
export class CardCaixaComponent implements OnInit, AfterContentInit, OnDestroy {

  cardElement: any;
  cardHeaderElement: any;
  cardBodyElement: any;
  cardFooterElement: any;

  close = new EventEmitter<boolean>();

  @ViewChild("moveButton", { static: true })
  moveButton: ElementRef;

  @Input()
  draggable = false;
  wasMoved = false;
  originalTopPosition: string;
  originalLeftPosition: string;
  originalHeight: number;
  originalMinHeight: string;
  originalMaxHeight: string;
  originalWidth: number;
  originalMinWidth: string;
  originalMaxWidth: string;

  @Input()
  expandable = true;
  isFullscreen = false;

  @Input()
  minimizable = true;
  isMinimized = false;

  isClosed = false;

  constructor(
    element: ElementRef,
    private renderer: Renderer2,
    public vcRef: ViewContainerRef  ) {
    this.cardElement = element.nativeElement;
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.draggable) { this.dragElement(); }
    if (this.minimizable) { this.setChildren(); }
  }

  setChildren(): void {
    const children: HTMLCollection = this.cardElement.children;
    if (children && children.length) {

      for (let index = 0; index < children.length; index++) {
        const child = children[index] as any;
        if (!child.classList) { return; }
        if (child.classList.contains("card-header")) {
          this.cardHeaderElement = child;
        }
        if (child.classList.contains("card-body")) {
          this.cardBodyElement = child;
        }
        if (child.classList.contains("card-footer")) {
          this.cardFooterElement = child;
        }
      }
    }
  }

  setOriginalPosition(): void {
    this.originalTopPosition = this.cardElement.style.top;
    this.originalLeftPosition = this.cardElement.style.left;
  }

  setOriginalSize(): void {
    this.originalHeight = this.cardElement.offsetHeight;
    this.originalWidth = this.cardElement.offsetWidth;
  }

  preventResize(): void {
    const stringHeight = this.originalHeight + "px";
    const stringWidth = this.originalWidth + "px";

    this.renderer.setStyle(this.cardElement, "minHeight", stringHeight);
    this.renderer.setStyle(this.cardElement, "height", stringHeight);
/*     this.renderer.setStyle(this.cardElement, "maxHeight", stringHeight); */

    this.renderer.setStyle(this.cardElement, "minWidth", stringWidth);
    this.renderer.setStyle(this.cardElement, "width", stringWidth);
/*     this.renderer.setStyle(this.cardElement, "maxWidth", stringWidth); */
  }

  resetOriginalPosition(): void {
    this.cardElement.style.left = this.originalLeftPosition;
    this.cardElement.style.top = this.originalTopPosition;
    this.cardElement.style.position = "relative";
    this.wasMoved = false;
  }

  resetOriginalSize(): void {
    this.renderer.setStyle(this.cardElement, "minHeight", this.originalMinHeight || null);
    this.renderer.setStyle(this.cardElement, "maxHeight", this.originalMaxHeight || null);
    this.renderer.setStyle(this.cardElement, "height", this.originalHeight + "px");
    this.renderer.setStyle(this.cardElement, "height", null);

    this.renderer.setStyle(this.cardElement, "minWidth", this.originalMinWidth || null);
    this.renderer.setStyle(this.cardElement, "maxWidth", this.originalMaxWidth || null);
    this.renderer.setStyle(this.cardElement, "width", this.originalWidth + "px");
    this.renderer.setStyle(this.cardElement, "width", null);
  }

  reset(): void {
    this.resetOriginalPosition();
    this.resetOriginalSize();
  }

  moved(): void {
    this.wasMoved = true;
    this.preventResize();
  }

  onMouseUp(ev) {}

  setPosition(position: string) {
    this.renderer.setStyle(this.cardElement, "position", position);
  }

  toggleFullscreen(): void {
    if (!this.cardElement) { return; }
    if (this.checkFullscreen()) {
      document.exitFullscreen().then(() => this.isFullscreen = false);
    } else {
      if (this.cardElement.requestFullscreen) {
        this.cardElement.requestFullscreen();
        this.isFullscreen = true;
      }
    }
  }

  checkFullscreen(): boolean {
    if (document.fullscreenElement ||
      document["webkitFullscreenElement"] ||
      document["mozFullScreenElement"]) {
      return true;
    } else {
      return false;
    }
  }

  dragElement(): void {
    this.setOriginalPosition();
    this.setOriginalSize();

    const elmnt = this.cardElement;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (!this.moveButton) { return; }
    if (this.moveButton.nativeElement) {
      // if present, the header is where you move the DIV from:
      this.moveButton.nativeElement.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      elmnt.style.position = "absolute";
      elmnt.style.minHeight = this.originalHeight;
      elmnt.style.minWidth = this.originalWidth;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  minimizar(): void {
    if (this.cardBodyElement) { this.renderer.addClass(this.cardBodyElement, "d-none"); }
    if (this.cardFooterElement) { this.renderer.addClass(this.cardFooterElement, "d-none"); }
    this.isMinimized = true;
  }

  maximizar(): void {
    if (this.cardBodyElement) { this.renderer.removeClass(this.cardBodyElement, "d-none"); }
    if (this.cardFooterElement) { this.renderer.removeClass(this.cardFooterElement, "d-none"); }
    this.isMinimized = false;
  }

  destruir() {
    this.close.emit(true);
    this.isClosed = true;
  }

  ngOnDestroy(): void { }

}
