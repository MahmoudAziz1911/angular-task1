import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNamelength]'
})
export class NamelengthDirective {
  @Input() namelength!: number;

  constructor(private el: ElementRef) { }

  @HostListener("window: load") onInput() {
    if(this.namelength > 10) {
      this.el.nativeElement.style.color = "red"
    }
  }
}
