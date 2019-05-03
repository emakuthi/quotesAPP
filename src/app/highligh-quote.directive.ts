import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighQuote]'
})
export class HighlighQuoteDirective {

  constructor(private elem:ElementRef) {
   
   }

  @HostListener("click") onClicks(){
    this.textDeco("blue")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("black")
  }
   private textDeco(action:string){
    this.elem.nativeElement.style.color=action;

  }

}
