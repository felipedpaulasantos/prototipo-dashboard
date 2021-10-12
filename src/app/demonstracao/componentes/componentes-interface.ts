import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

const TOOLBAR_HEIGHT = 64;

export abstract class ComponentesInterface {

  constructor(
    public toastr: ToastrService
	) { }

	abstract scrollElement;
	abstract sectionOffset = 0;
	abstract spiedTags: string[];
	abstract currentSection = "";

	scrollTo(section) {
    window.scrollBy({ top: - TOOLBAR_HEIGHT });
 		document.querySelector("#" + section)
      .scrollIntoView({ behavior: "smooth" });
	}

	onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

	copiarConteudo(val: string): void {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.toastr.info("Conteúdo copiado!");
	}

	setSectionOffset() {
    if (this.sectionOffset) { return; }
    if (this.scrollElement.nativeElement.getBoundingClientRect()) {
      const rect = this.scrollElement.nativeElement.getBoundingClientRect();
      const sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
      this.sectionOffset = rect.top - sy;
    }
	}

  onScroll(event) {
    this.setSectionOffset();
    let currentSection: string;
    if (!this.scrollElement || !this.scrollElement.nativeElement) { return; }

    const children = this.scrollElement.nativeElement.children;
		const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = event.target.scrollingElement.offsetTop;

    if (!children || !scrollTop) { return; }
		for (let i = 0; i < children.length; i++) {
      const element = children[i];
			if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
				if ((element.offsetTop - this.sectionOffset) <= scrollTop) {
					currentSection = element.id;
				}
			}
		}
		if (currentSection !== this.currentSection) {
			this.currentSection = currentSection;
		}
  }

}
