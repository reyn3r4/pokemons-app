import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noSpecialCharacters]'
})
export class NoSpecialCharactersDirective {
  constructor(private readonly elRef: ElementRef) { }
  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void {
    const reg = /[^0-9 a-z A-Z -]*/g;
    const initValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initValue.replace(reg, '');
    if (initValue != this.elRef.nativeElement.value)
      event.stopPropagation();
  }
}
