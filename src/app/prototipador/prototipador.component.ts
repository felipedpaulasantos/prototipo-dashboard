import { ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, 
  ElementRef, Injector, OnInit, Renderer2, Type, ViewChild, ViewContainerRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ResizeEvent } from "angular-resizable-element";
import { Subscription } from "rxjs";

@Component({
  selector: "app-prototipador",
  templateUrl: "./prototipador.component.html",
  styleUrls: ["./prototipador.component.scss"]
})
export class PrototipadorComponent implements OnInit {

  @ViewChild("prototipadorGrid")
  prototipadorGrid: ElementRef;

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) { }

  showBorder = true;
  items = [];

  ngOnInit(): void {
  }

  onResizeEnd(event: ResizeEvent, cardBody: ElementRef): void {
    const style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.renderer.setStyle(cardBody, "width", style.width);
    this.renderer.setStyle(cardBody, "height", style.height);
  }

  addInput() {
    const element = this.sanitizer.bypassSecurityTrustHtml("<input class='input-caixa'>");
    this.items.push({ html: element });
    this.items = [].concat(this.items);
  }

  addCardButton() {
    const element = this.sanitizer.bypassSecurityTrustHtml("<cx-card-button></cx-card-button>");
    this.items.push({ html: element });
    this.items = [].concat(this.items);
  }

  addCampoTexto() {
    const element = this.sanitizer.bypassSecurityTrustHtml("<textarea class='w-100 h-100 border-0 shadow-none'></textarea>");
    this.items.push({ html: element });
    this.items = [].concat(this.items);
  }

  destroy(index) {
    this.items.splice(index);
    this.items = [].concat(this.items);
  }

}
